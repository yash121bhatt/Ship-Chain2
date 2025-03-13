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

  registerSubmit() {
  if(this.registerForm.valid){
    this.services.registerSubmit(this.registerForm.value).subscribe({
      next: (res: any) => {
        if (res.token) {
          localStorage.setItem('authToken', res.token);
          console.log('Registration successful', res); 
          this.router.navigate(['/verification']);  
        }
      },
      error: (err: any) => {
        console.error('Registration failed', err);
        // Implement error handling logic
      }
    });
  }
   }

}

