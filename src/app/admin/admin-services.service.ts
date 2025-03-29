import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminServicesService {
  url = 'https://api-rk-geographical.onrender.com'
  constructor(private http: HttpClient) { }

  blogList() {
    return this.http.get(this.url + '/api/blogs/');
  }
}
