import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ServicesService } from '../../myservices/services.service';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule, ReactiveFormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  @Output() newPassword = new EventEmitter<string>();
  showChangePassword: boolean = false;
  user: any;
  userInfoForm: FormGroup;
  passwordForm: FormGroup;
  emailForm: FormGroup;
  userRole: string = '';
  emailAddresses: any = [];
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  private _snackBar = inject(MatSnackBar);

  constructor(private http: ServicesService, private fb: FormBuilder, private router: Router, private activeRoute: ActivatedRoute) {
    // Initialize Forms
    this.userInfoForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      companyName: ['', Validators.required]
    });

    this.passwordForm = this.fb.group({
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    });

    this.emailForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit() {
    this.http.getUserProfile().subscribe((res: any) => {
      this.userRole = res.user.role;
      this.getRoleUsers(this.userRole);
    }, (err: any) => {
      console.log(err);
      if (err.status == 401) {
        localStorage.removeItem('authToken');
        this.router.navigate(['/login']);
      }
    });
    this.getEmail();
  }

  openSnackBar(message: string) {
    const snackRef = this._snackBar.open(message, undefined, {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 3000,
      panelClass: ['snack-bar-animation']
    });
  }

  changePassword() {
    this.showChangePassword = !this.showChangePassword;
  }

  getRoleUsers(role: string) {
    if (role === 'carrier') {
      this.http.carrierProfile().subscribe((res: any) => {
        this.user = res.carrier;
        this.userInfoForm.patchValue({
          firstName: this.user?.user?.firstName,
          lastName: this.user?.user?.lastName,
          companyName: this.user?.companyName
        });
      });
    } else if (role === 'shipper') {
      this.http.shipperProfile().subscribe((res: any) => {
        this.user = res.shipper;
        this.userInfoForm.patchValue({
          firstName: this.user?.user?.firstName,
          lastName: this.user?.user?.lastName,
          companyName: this.user?.companyName
        });
      });
    }
  }


  onSubmitUserInfo() {
    console.log(this.userInfoForm.value);

    this.http.updateShipper(this.userInfoForm.value).subscribe((res: any) => {
      if (res.success) {
        console.log('message  --- >', res.message);

        this.openSnackBar(res.message);
      }
    });
  }

  onSubmitPassword() {
    const { newPassword, confirmPassword } = this.passwordForm.value;
    if (newPassword !== confirmPassword) {

      return this.openSnackBar('Passwords do not match');

    }

    this.http.changePassword(this.passwordForm.value).subscribe((res: any) => {
      if (res.success) {
        this.openSnackBar(res.message);
      }
    },
      (err: any) => {
        this.openSnackBar(err.message);
      }
    )

  }

  onSubmitEmail() {
    this.http.addEmail(this.emailForm.value).subscribe((res: any) => {
      console.log(res.data);

      if (res.success) {
        this.getEmail();
        this.openSnackBar(res.message);
        this.emailForm.reset();
      }
    },
      (err: any) => {
        this.openSnackBar(err.message);
      }
    )
  }

  getEmail() {
    this.http.getAllEmail().subscribe((res: any) => {
      this.emailAddresses = res.emailAddresses;
    })
  }

  setPrimaryEmail(id: any) {
    this.http.setPrimaryEmail(id).subscribe((res: any) => {
      if (res.success) {
        this.getEmail();
        this.openSnackBar(res.message);
      }
    },
      (err: any) => {
        this.openSnackBar(err.message);
      }
    )
  }

  deleteEmail(id: string) {
    this.http.deleteEmail(id).subscribe((res: any) => {
      if (res.success) {
        this.getEmail();
        this.openSnackBar(res.message);
      }
    },
      (err: any) => {
        this.openSnackBar(err.message);
      }
    )
  }


}
