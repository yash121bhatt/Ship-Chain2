import { CommonModule } from '@angular/common';
import { Component, Input, model } from '@angular/core';
import { MatRadioModule } from '@angular/material/radio';
import { FormControl, FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-new-review',
  standalone: true,
  imports: [CommonModule, MatRadioModule, FormsModule, MatCheckboxModule, MatCardModule, MatAutocompleteModule, MatFormFieldModule, AutocompleteLibModule, MatButtonModule],
  templateUrl: './new-review.component.html',
  styleUrl: './new-review.component.css'
})
export class NewReviewComponent {
  favoriteSeason: string | undefined
  seasons: string[] = ['Yes', 'No'];
  carrierRates: string[] = [' Below market rate ', '  Above market rate ', '   At market rate '];
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


  constructor() { }

  ngOnInit() {

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

}
