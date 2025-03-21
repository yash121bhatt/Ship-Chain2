import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ServicesService } from '../../myservices/services.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup;
  showPassword = false;
  isLoading = false;

  constructor(private fb: FormBuilder , private services:ServicesService , private router: Router) {

    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit(): void {
    
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  get submitButtonDisabled() {
    return this.isLoading || !this.loginForm.valid;
  }

  LoginSubmit() {
    console.log('hello');
    console.log(this.loginForm);
    this.isLoading = true;
    if (this.loginForm.valid) {
      this.services.LoginSubmit(this.loginForm.value).subscribe({
        next: (res: any) => {
          this.isLoading = false;
          if (res.token) {
            localStorage.setItem('authToken', res.token);
            if(res.user.role == 'user'){
            this.router.navigate(['/my-profile']);
            }else{
              this.router.navigate(['/dashboard']);
            }
            console.log('User already logged in');
            // Implement logic for user already logged in
          } else {
            console.log('Login successful', res);
            // Implement further logic on successful login
          }
        },
        error: (err: any) => {
          this.isLoading = false;
          console.error('Login failed', err);
          // Implement error handling logic
        }
      });
    } else {
      console.warn('Form is invalid');
      this.isLoading = false;
    }
  }



}

