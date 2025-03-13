import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) { }

  getConfigList() {
    return this.http.get('https://api-rk-geographical.onrender.com/api/configs-list');
  }

  getCarrierList(data: any) {
    const params = data
    return this.http.get('https://api-rk-geographical.onrender.com/api/carriers',{params});
  }

  // Authentication
  LoginSubmit(data:any){
    return this.http.post('https://api-rk-geographical.onrender.com/api/auth/login',data);
  }

  registerSubmit(data:any){
    return this.http.post('https://api-rk-geographical.onrender.com/api/auth/register',data);
  }

  userVerify(data: any, headers: unknown){
    return this.http.post('https://api-rk-geographical.onrender.com/api/auth/verify-email',data);
  }

  forgotPasswordSubmit(data:any){
    return this.http.post('https://api-rk-geographical.onrender.com/api/auth/forgot-password',data);
  }

  resetPasswordSubmit(data:any){
    return this.http.post('https://api-rk-geographical.onrender.com/api/auth/reset-password',data);
  }

}
