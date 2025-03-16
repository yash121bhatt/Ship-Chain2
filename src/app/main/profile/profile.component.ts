import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../myservices/services.service';
import {MatCardModule} from '@angular/material/card';
import {MatRadioModule} from '@angular/material/radio';
import { MatDialogModule} from '@angular/material/dialog';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule , MatCardModule , MatRadioModule ,MatDialogModule , ReactiveFormsModule ],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  
})
export class ProfileComponent implements OnInit {

  favoriteSeason: string | undefined;
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];
  profileData:any
  dot = false
  carrierForm : FormGroup

  constructor(private http:ServicesService , private fb: FormBuilder){
    this.carrierForm = this.fb.group({
      companyName: ['', [Validators.required]],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      country: ['', [Validators.required]],
      dotNumber: ['', [Validators.required , Validators.maxLength(10)]],
      role : ['', [Validators.required]]

    });
  }

  ngOnInit(): void {
    this.myProfileSubmit();
    this.onDotChange({checked : false})
  }

  myProfileSubmit(){
    this.http.myProfileSubmit().subscribe((res:any)=>{
      console.log(res);
      
      this.profileData = res
    })
  }

  onDotChange(event:any){
    console.log(event);
    
    this.dot = event.checked;
    console.log(this.dot);
    
    if(!this.dot){
      this.profileData = undefined
    }
  }

  onSubmit(){
    

  }


}

