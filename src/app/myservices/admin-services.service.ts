import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminServicesService {

  baseUrl = 'https://api-rk-geographical.onrender.com'

  constructor(private http: HttpClient) { }

  adminBlogList() {
    return this.http.get(this.baseUrl + '/api/blogs')
  }

}
