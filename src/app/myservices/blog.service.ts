import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  baseUrl = 'https://api-rk-geographical.onrender.com'

  constructor(private http: HttpClient) { }

  contactUs(data: any) {
    return this.http.post(this.baseUrl + "/api/contact", data)
  }

  blogPage(params: any) {
    return this.http.get(this.baseUrl + "/api/blogs/", { params })
  }

}
