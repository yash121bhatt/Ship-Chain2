import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBar, MatSnackBarHorizontalPosition , MatSnackBarVerticalPosition} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BlogService } from '../../myservices/blog.service';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule, MatCardModule, ReactiveFormsModule],
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  contactForm: FormGroup;
   horizontalPosition: MatSnackBarHorizontalPosition = 'end';
    verticalPosition: MatSnackBarVerticalPosition = 'bottom';
    private _snackBar = inject(MatSnackBar);

  constructor(private fb: FormBuilder, private blogService: BlogService, private router: Router) {
    this.contactForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      companyName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required]],
      role: ['', [Validators.required]],
      isSubscribed : ['', [Validators.required]]
    });
  }

  ngOnInit(){

  }

  openSnackBar(message: string) {
    const snackRef = this._snackBar.open(message, undefined, {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 3000,
      panelClass: ['snack-bar-animation']
    });
  }

  contactSubmit(): void {
    if(this.contactForm.valid) {  
      this.blogService.contactUs(this.contactForm.value).subscribe((res: any) => {
       console.log(res.data);
       
        if (res.success) {
          this.contactForm.reset(); 
          this.openSnackBar(res.message);
          console.log(res.message);
          
        }
        
      })
    }
  }
}

