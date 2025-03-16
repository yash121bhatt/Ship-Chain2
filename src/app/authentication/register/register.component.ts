import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ServicesService } from '../../myservices/services.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule , RouterLink],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{

  registerForm: FormGroup
  showPassword = false;
  isLoading = false;

  constructor(private fb: FormBuilder, private services: ServicesService, private router: Router) {

    this.registerForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
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
    return this.isLoading || !this.registerForm.valid;
  }

  registerSubmit() {
    this.isLoading = true;
  if(this.registerForm.valid){
    this.services.registerSubmit(this.registerForm.value).subscribe({
      next: (res: any) => {
        this.isLoading = false;
        if (res.token) {
          localStorage.setItem('authToken', res.token);
          console.log('Registration successful', res); 
          this.router.navigate(['/verification']);  
        }
      },
      error: (err: any) => {
        this.isLoading = false;
        console.error('Registration failed', err);
        // Implement error handling logic
      }
    });
  }else {
    console.warn('Form is invalid');
    this.isLoading = false;
  }
   }

}

