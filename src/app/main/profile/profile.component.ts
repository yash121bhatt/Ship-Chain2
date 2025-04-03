import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../myservices/services.service';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { MatDialogModule } from '@angular/material/dialog';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatRadioModule, MatDialogModule, ReactiveFormsModule, FormsModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],

})
export class ProfileComponent implements OnInit {

  favoriteSeason: string | undefined;
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];
  profileData: any
  carrierForm: FormGroup
  selectValue: string = ''
  countries: any = []
  states: any = []
  cities: any = []

  constructor(private http: ServicesService, private fb: FormBuilder, private router: Router) {

    this.carrierForm = this.fb.group({
      companyName: ['', [Validators.required]],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      country: ['', [Validators.required]],
      dotNumber: ['', [Validators.required, Validators.maxLength(10)]],
      role: ['', [Validators.required]]

    });


    this.carrierForm.get('country')?.valueChanges.subscribe((val: any) => {
      this.http.getStateList({ country_code: val }).subscribe((res: any) => {
        this.states = res.data
      })
    })

    this.carrierForm.get('state')?.valueChanges.subscribe((val: any) => {
      this.http.getCityList({ country_code: this.carrierForm.get('country')?.value, state_code: val }).subscribe((res: any) => {
        this.cities = res.data
      })
    })
  }

  ngOnInit(): void {
    this.http.getCountryList().subscribe((res: any) => {
      this.countries = res.data
    })

    this.http.getStateList({}).subscribe((res: any) => {
      this.states = res.data
    })

    this.http.getCityList({}).subscribe((res: any) => {
      this.cities = res.data
    })

    this.myProfileSubmit();

  }

  myProfileSubmit() {
    this.http.getUserProfile().subscribe(
      (res: any) => {
        console.log(res);
        this.profileData = res
      },
      (err: any) => {
        console.log(err);
        if (err.status == 401) {
          localStorage.removeItem('authToken');
          this.router.navigate(['/login']);
        }
      }
    )
  }


  onSubmit() {
    // console.log(this.carrierForm.get('country')?.value);

    // console.log(this.carrierForm.value);

    this.http.assignRole(this.carrierForm.value).subscribe((res: any) => {
      res.success ? this.router.navigate(['/dashboard']) : ''
    })

  }


}

