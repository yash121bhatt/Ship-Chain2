import { CommonModule } from '@angular/common';
import { Component, Input, model } from '@angular/core';
import { MatRadioModule } from '@angular/material/radio';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { Observable } from 'rxjs';
import { ServicesService } from '../../myservices/services.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-review',
  standalone: true,
  imports: [CommonModule, MatRadioModule, FormsModule, MatCheckboxModule, MatCardModule, MatAutocompleteModule, MatFormFieldModule, AutocompleteLibModule, MatButtonModule, ReactiveFormsModule],
  templateUrl: './new-review.component.html',
  styleUrl: './new-review.component.css'
})
export class NewReviewComponent {
  reviewConfigForm: FormGroup;
  favoriteSeason: string | undefined
  favoriteUpdateForThisCarriers: string | undefined
  seasons: any[] = ['Yes', 'No'];
  updateForThisCarriers: any[] = [' Yes ', '  No '];
  carrierRates: any = [];
  workWithCarrier: string[] = [' Once ', '  2-10 times ', ' More than 10 times '];
  readonly checked = model(false);
  readonly indeterminate = model(false);
  readonly labelPosition = model<'before' | 'after'>('after');
  readonly disabled = model(false);
  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]> | undefined;
  showCarrierLane: boolean = false
  @Input() title: string = '';
  @Input() leftLabel: string = '';
  @Input() rightLabel: string = '';
  selectedRating: number = 0;
  searchName !: string
  keyword: string = 'name';
  allReviewConfigs: any = [];
  carrierId: string = '';



  public pickUps = [
    {
      id: 1,
      name: 'New York'
    },
    {
      id: 2,
      name: 'Ottava'
    },
    {
      id: 3,
      name: 'Sad-Luis'
    },
    {
      id: 4,
      name: 'Washington'
    },
    {
      id: 5,
      name: 'Kiwi'
    }
  ]

  public dropOffs = [
    {
      id: 1,
      name: 'New York'
    },
    {
      id: 2,
      name: 'Ottava'
    },
    {
      id: 3,
      name: 'Sad-Luis'
    },
    {
      id: 4,
      name: 'Washington'
    },
    {
      id: 5,
      name: 'Kiwi'
    }
  ]


  constructor(private http: ServicesService, private fb: FormBuilder, private activetRoute: ActivatedRoute) {
    this.carrierId = this.activetRoute.snapshot.params['carrierId']
    this.reviewConfigForm = this.fb.group({
      "carrierId": [this.carrierId],
      "Title (Optional)": [''],
      "Would you work with this carrier again?": [''],
      "What went well": this.fb.array([]),
      "What went poorly": this.fb.array([]),
      "Would you like to receive availability updates for this carrier? (Optional)": [''],
      "Tell us about your overall experience working with this carrier": [''],
      "When did you last work with this carrier?": this.fb.group({
        "month": [''],
        "year": ['']
      }),
      "How did you find this carrier? (Optional)": [''],
      "How was the carrier's rate?": [''],
      "How often have you worked with this carrier?": [''],
      "What lanes did this carrier run?": this.fb.array([
        this.fb.group({
          "pickup": [''],
          "dropoff": ['']
        }),
      ]),
      "Timeliness": [0],
      "Quality of Equipment": [0],
      "Communication": [0],
      "What type(s) of freight did you ship?": this.fb.array([]),
      "What type(s) of truck did you use?": this.fb.array([]),
      "What type(s) of shipments did this carrier take?": this.fb.array([]),
      "What specialized services did this carrier provide? (Optional)": this.fb.array([]),
      "Did this carrier use electronic tracking?": [''],
      "Did the tracking work throughout the duration of their haul?": [''],
      "Add a verification screenshot": [''],
      "Is your brokerage related to this carrier in any way?": [''],
      "Are you willing to be a reference for this carrier?": [''],
      "I would like my review to be anonymous": ['']
    });
  }

  ngOnInit() {
    this.http.reviewConfig().subscribe((res: any) => {
      console.log(res);

      this.allReviewConfigs = res.configs;
      console.log(this.allReviewConfigs);

    })
  }

  addLane() {
    this.showCarrierLane = !this.showCarrierLane
  }

  selected(item: any) {
    this.searchName = item.searchName
  }

  onRatingClick(rating: number) {
    this.selectedRating = rating;
  }

  isSelected(rating: number): boolean {
    return this.selectedRating === rating;
  }

  reviewFormSubmit() {
    console.table(this.reviewConfigForm.value);
    // this.http.addAllReview(this.reviewConfigForm.value).subscribe((res: any) => {
    //   console.log(res);
    //   if (res.success) {
    //     this.reviewConfigForm.reset();
    //   }
    // },
    //   (err: any) => {
    //     console.log(err);
    //   }
    // )
  }
}
