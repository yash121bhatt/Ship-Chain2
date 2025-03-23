import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { ServicesService } from '../../myservices/services.service';

@Component({
  selector: 'app-write-review',
  standalone: true,
  imports: [CommonModule, MatCardModule, ReactiveFormsModule],
  templateUrl: './write-review.component.html',
  styleUrl: './write-review.component.css'
})
export class WriteReviewComponent {

  reviewForm: FormGroup;
  searchValue: string = '';
  findResult : any = [];

  constructor(private fb: FormBuilder , private services:ServicesService) {
    this.reviewForm = this.fb.group({
      search: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.reviewForm.get('search')?.valueChanges.subscribe(value => {
      this.searchValue = value;
      this.searchCarrier(value);
    });
  }

  searchCarrier(value:string) {
   this.services.reviewSearch({q:value}).subscribe((res:any)=>{
     this.findResult = res.carriers
   })
  }

  shouldShowCard(): boolean {
    return this.searchValue.trim().length > 0;
  }
}

