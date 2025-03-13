import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
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

  constructor(private fb: FormBuilder , private services:ServicesService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit(): void {
    
  }

  LoginSubmit() {
    console.log('hello');
    console.log(this.loginForm);
    
    if (this.loginForm.valid) {
      this.services.LoginSubmit(this.loginForm.value).subscribe({
        next: (res: any) => {
          if (res.token) {
            localStorage.setItem('authToken', res.token);
            console.log('User already logged in');
            // Implement logic for user already logged in
          } else {
            console.log('Login successful', res);
            // Implement further logic on successful login
          }
        },
        error: (err: any) => {
          console.error('Login failed', err);
          // Implement error handling logic
        }
      });
    } else {
      console.warn('Form is invalid');
    }
  }

}

