import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ServicesService } from '../../myservices/services.service';
import { Router } from '@angular/router';

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

  constructor(private http: ServicesService, private fb: FormBuilder, private router: Router) {
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
    });
  }

  changePassword() {
    this.showChangePassword = !this.showChangePassword;
  }

  getRoleUsers(role: string) {
    if (role === 'carrier') {
      this.http.carrierProfile().subscribe((res: any) => {
        this.user = res.carrier;
      });
    } else if (role === 'shipper') {
      this.http.shipperProfile().subscribe((res: any) => {
        this.user = res.shipper;
      });
    }
  }

  onSubmitUserInfo() {
    console.log(this.userInfoForm.value);
    
    this.http.updateShipper(this.userInfoForm.value).subscribe((res: any) => {
      if (res.success) {
        alert(res.message);
      }
    })
  }

  onSubmitPassword() {
    const { newPassword, confirmPassword } = this.passwordForm.value;
    if (newPassword !== confirmPassword) {
      
     return  alert('confirm password should match') 

    }
    
    this.http.changePassword(this.passwordForm.value).subscribe((res: any) => {
      if (res.success) {
        alert(res.message);
      }
    })

  }

  onSubmitEmail() {
    // if (this.emailForm.valid) {
    //   this.http.addUserEmail(this.emailForm.value).subscribe(() => {
    //     alert('Email added successfully!');
    //   });
    // }
  }
}
