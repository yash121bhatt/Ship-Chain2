import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ServicesService } from '../../myservices/services.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.css'
})
export class ResetPasswordComponent {
  queryData : any;
  resetPasswordForm : FormGroup
  showPassword = false;
constructor(private services:ServicesService , private activeRoute:ActivatedRoute , private fb: FormBuilder , private router: Router) {
  this.queryData = this.activeRoute.snapshot.queryParams;
    console.log(this.queryData);

    this.resetPasswordForm = this.fb.group({
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
}


ngOnInit(): void {}

togglePasswordVisibility() {
  this.showPassword = !this.showPassword;
}

  resetPasswordSubmit(){
    const finalData = {...this.queryData , ...this.resetPasswordForm.value}
    this.services.resetPasswordSubmit(finalData).subscribe((res:any)=>{
         if(res.success){
           this.router.navigate(['/login']);
         }
    });
    console.log(this.resetPasswordForm.value);
    
  }

}
