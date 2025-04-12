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
    return this.http.get('https://api-rk-geographical.onrender.com/api/carriers', { params });
  }

  // Authentication
  LoginSubmit(data: any) {
    return this.http.post('https://api-rk-geographical.onrender.com/api/auth/login', data);
  }

  registerSubmit(data: any) {
    return this.http.post('https://api-rk-geographical.onrender.com/api/auth/register', data);
  }

  userVerify(data: any, headers: unknown) {
    return this.http.post('https://api-rk-geographical.onrender.com/api/auth/verify-email', data);
  }

  forgotPasswordSubmit(data: any) {
    return this.http.post('https://api-rk-geographical.onrender.com/api/auth/forgot-password', data);
  }

  resetPasswordSubmit(data: any) {
    return this.http.post('https://api-rk-geographical.onrender.com/api/auth/reset-password', data);
  }

  getUserProfile() {
    return this.http.get('https://api-rk-geographical.onrender.com/api/auth/profile');
  }

  carrearShipperdetail(data: any) {
    return this.http.post('https://api-rk-geographical.onrender.com/api/auth/assign-role', data)
  }

  getCountryList() {
    return this.http.get('https://api-rk-geographical.onrender.com/api/countries?limit=300');
  }

  getStateList(params: any) {
    return this.http.get('https://api-rk-geographical.onrender.com/api/states?limit=200', { params });
  }

  getCityList(params: any) {
    return this.http.get('https://api-rk-geographical.onrender.com/api/cities?limit=200', { params });
  }

  assignRole(data: any) {
    return this.http.post('https://api-rk-geographical.onrender.com/api/auth/assign-role', data)
  }

  shipperProfile() {
    return this.http.get('https://api-rk-geographical.onrender.com/api/shippers/me');
  }

  carrierProfile() {
    return this.http.get('https://api-rk-geographical.onrender.com/api/carriers/me');
  }

  changePassword(data: any) {
    return this.http.post('https://api-rk-geographical.onrender.com/api/auth/change-password', data)
  }

  updateShipper(data: any) {
    return this.http.put('https://api-rk-geographical.onrender.com/api/shippers/profile-update', data);
  }

  reviewSearch(params: any) {
    return this.http.get('https://api-rk-geographical.onrender.com/api/external/carrier-search-for-review', { params });
  }

  getAllEmail() {
    return this.http.get('https://api-rk-geographical.onrender.com/api/email-address');
  }

  addEmail(data: any) {
    return this.http.post('https://api-rk-geographical.onrender.com/api/email-address', data)
  }

  VerifyOthersEmailAddress(data: any) {
    return this.http.post('https://api-rk-geographical.onrender.com/api/auth/verify-others-email', data);
  }

  setPrimaryEmail(id: any) {
    return this.http.put(`https://api-rk-geographical.onrender.com/api/email-address/${id}`, {});
  }

  deleteEmail(id: any) {
    return this.http.delete(`https://api-rk-geographical.onrender.com/api/email-address/${id}`, {});
  }

  // Dashboard save list

  getAllList() {
    return this.http.get('https://api-rk-geographical.onrender.com/api/lists');
  }

  deleteList(id: any) {
    return this.http.delete(`https://api-rk-geographical.onrender.com/api/lists/${id}`);
  }

  addList(data: any) {
    return this.http.post('https://api-rk-geographical.onrender.com/api/lists', data)
  }

  addCarrierInList(list: any, carrier: any) {
    return this.http.post(`https://api-rk-geographical.onrender.com/api/lists/${list}/carriers/${carrier}`, {});
  }

  removeCarrierList(list: any, carrier: any) {
    return this.http.delete(`https://api-rk-geographical.onrender.com/api/lists/${list}/carriers/${carrier}`, {});
  }

  getCarrier_List(id: any) {
    return this.http.get(`https://api-rk-geographical.onrender.com/api/lists/${id}/carriers`);
  }

  getCarrierListBySaveList(id: string) {
    return this.http.get(`https://api-rk-geographical.onrender.com/api/lists/${id}`);
  }

  reviewConfig() {
    return this.http.get('https://api-rk-geographical.onrender.com/api/review/config');
  }

  addAllReview(data: any) {
    return this.http.post('https://api-rk-geographical.onrender.com/api/review', data);
  }

}
