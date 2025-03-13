import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { MatCardTitle } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatChip } from '@angular/material/chips';
import { MatButton } from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatChipSet} from '@angular/material/chips';
import { ProgressBarMode , MatProgressBarModule} from '@angular/material/progress-bar';
import {CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray} from '@angular/cdk/drag-drop';
import {ChangeDetectionStrategy, signal} from '@angular/core';
import {MatChipsModule} from '@angular/material/chips'

export interface PeriodicElement {
  tractors: number;
  title: string;
  trailers: number;
  trucks: number;
}

export interface Vegetable {
  name: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {title: 'Owned', tractors: 167, trailers: 0, trucks: 0},
  {title: 'Leased', tractors: 60, trailers: 523, trucks: 0},

];

@Component({
  selector: 'app-carrier-details',
  standalone: true,
  imports: [CommonModule, MatCard, MatCardTitle, MatIcon, MatChip , MatButton , MatTabsModule , MatTableModule , MatCardModule , MatChipSet , MatProgressBarModule , CdkDrag , CdkDropList , MatChipsModule ],
  templateUrl: './carrier-details.component.html',
  styleUrl: './carrier-details.component.css'
})
export class CarrierDetailsComponent {

  displayedColumns: string[] = ['title', 'tractors', 'trailers', 'trucks'];
  dataSource = ELEMENT_DATA;

  mode: ProgressBarMode = 'determinate';
  value = 90;
  bufferValue = 75;

  readonly vegetables = signal<Vegetable[]>([
    {name: 'apple'},
    {name: 'banana'},
    {name: 'strawberry'},
    {name: 'orange'},
    {name: 'kiwi'},
    {name: 'cherry'},
  ]);

  drop(event: CdkDragDrop<Vegetable[]>) {
    this.vegetables.update(vegetables => {
      moveItemInArray(vegetables, event.previousIndex, event.currentIndex);
      return [...vegetables];
    });
  }

}
