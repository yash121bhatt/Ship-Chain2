import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { ServicesService } from '../../myservices/services.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [ CommonModule,MatCardModule,RouterLink,NgxSkeletonLoaderModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
 
  topCompaniesByRegions : any;

  topCompaniesByShipmentTypes : any;

  showSkeleton = true;

  constructor(private http:ServicesService) { }

  ngOnInit(){
    this.getConfigList();
  }

  getConfigList() {
    this.http.getConfigList().subscribe((res:any) => {
      console.log(res);
      
       this.topCompaniesByRegions = res.topCompaniesByRegions;
       this.topCompaniesByShipmentTypes = res.topCompaniesByShipmentTypes;
       this.showSkeleton = false;
      
    })
  }

}

