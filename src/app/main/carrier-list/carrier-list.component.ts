import { Component, Input } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatToolbar } from '@angular/material/toolbar';
import { MatMenu } from '@angular/material/menu';
import { MatNavList } from '@angular/material/list';
import { MatListItem } from '@angular/material/list';
import { MatDrawerContainer } from '@angular/material/sidenav';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { ActivatedRoute } from '@angular/router';
import { ServicesService } from '../../myservices/services.service';
import { RouterLink } from '@angular/router';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DilogComponent } from '../dilog/dilog.component';
import { SharedService } from '../../myservices/shared.service';


interface Food {
  value: string;
  viewValue: string;
}

interface Car {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-carrier-list',
  standalone: true,
  imports: [CommonModule, MatSidenavModule, MatCardModule, MatInputModule, MatSelectModule, MatFormFieldModule, FormsModule, MatButtonModule, MatIcon, MatChipsModule, MatCheckboxModule, MatToolbar, MatMenu, MatNavList, MatListItem, MatDrawerContainer, MatRadioModule, RouterLink, NgxSkeletonLoaderModule, MatDialogModule, DilogComponent],
  templateUrl: './carrier-list.component.html',
  styleUrl: './carrier-list.component.css'
})
export class CarrierListComponent {



  constructor(private myService: ServicesService, private shared: SharedService, private activeRoute: ActivatedRoute, private dialog: MatDialog) {
    this.dialog = dialog;
  }

  selectedValue!: string;
  selectedCar!: string;

  getSlug: any
  getCountryCode: string = ''
  getCountryTitle: string = ''
  carriers: any
  truckTypes: any
  shipmentTypes: any
  safetyRatings: any
  specializedServices: any
  freights: any
  insuranceMinimum: any
  authorityMaintained: any
  operations: any
  isLoading = true



  foods: Food[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' },
  ];

  cars: Car[] = [
    { value: 'volvo', viewValue: 'Volvo' },
    { value: 'saab', viewValue: 'Saab' },
    { value: 'mercedes', viewValue: 'Mercedes' },
  ];

  ngOnInit() {
    this.getSlug = this.activeRoute.snapshot.paramMap.get('slug');
    console.log(this.getSlug);
    this.getHelper(this.getSlug);
    this.getCarrierList(this.getCountryCode);
    this.getSideMenu();
  }



  openDialog(enterAnimationDuration: string, exitAnimationDuration: string, carrierId: string): void {
    this.shared.changeMessage(carrierId)
    this.dialog.open(DilogComponent, {
      width: '50vw',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }


  getHelper(slug: string) {
    if (slug == 'canada') {
      this.getCountryCode = 'CA'
      this.getCountryTitle = 'Canada'
    } else if (slug == 'united-states') {
      this.getCountryCode = 'US'
      this.getCountryTitle = 'United States'
    } else if (slug == 'mexico') {
      this.getCountryCode = 'MX'
      this.getCountryTitle = 'Mexico'
    } else {
      this.getCountryCode = ''
      this.getCountryTitle = ''
    }
  }

  getCarrierList(getCountryCode: any) {
    this.isLoading = true
    this.myService.getCarrierList({ phyCountry: getCountryCode }).subscribe((res: any) => {
      console.log(res);
      this.carriers = res.data
      this.isLoading = false
    })
  }

  getSideMenu() {
    this.myService.getConfigList().subscribe((res: any) => {
      console.log(res);
      this.truckTypes = res.truckTypes;
      this.shipmentTypes = res.shipmentTypes;
      this.safetyRatings = res.safetyRatings;
      this.specializedServices = res.specializedServices;
      this.freights = res.freights;
      this.insuranceMinimum = res.insuranceMinimum;
      this.authorityMaintained = res.authorityMaintained;
      this.operations = res.operations;

    })
  }



  badgevisible = false;
  badgevisibility() {
    this.badgevisible = true;
  }


}

