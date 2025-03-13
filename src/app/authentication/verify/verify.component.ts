import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicesService } from '../../myservices/services.service';
import { HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-verify',
  standalone: true,
  imports: [CommonModule ,],
  templateUrl: './verify.component.html',
  styleUrl: './verify.component.css'
})
export class VerifyComponent {
 
  queryData: any;

  constructor(private activeRoute:ActivatedRoute , private services:ServicesService){
    this.queryData = this.activeRoute.snapshot.queryParams;
    console.log(this.queryData);
    
  }

  ngOnInit(){
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
    this.services.userVerify(this.queryData, headers).subscribe((res:any)=>{
      console.log(res);
      if (res.token) {
        localStorage.setItem('authToken', res.token);
        console.log('User Verified');
      } 
    })
  }




}
