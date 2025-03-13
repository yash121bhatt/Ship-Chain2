import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ServicesService } from '../../myservices/services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [CommonModule , ReactiveFormsModule],
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {

  forgotPasswordForm: FormGroup;

  constructor(private fb: FormBuilder, private services: ServicesService , private router: Router) {
    this.forgotPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit(): void {
  }

  forgotPasswordSubmit() {

    if (this.forgotPasswordForm.valid) {
      this.services.forgotPasswordSubmit(this.forgotPasswordForm.value).subscribe(
        (response: any) => {
          console.log(response);
         if(response.success){
          this.router.navigate(['forgot-password-email-send']);
         }
        },
        (error: any) => {
          console.log(error);
        }
      );
    }

  }

}

