import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatChip } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ServicesService } from '../../myservices/services.service';

@Component({
  selector: 'app-show-carrier-in-list',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIcon, MatChip, MatButtonModule, RouterLink],
  templateUrl: './show-carrier-in-list.component.html',
  styleUrls: ['./show-carrier-in-list.component.css']
})
export class ShowCarrierInListComponent implements OnInit {
  showAllFreight: boolean = false;
  carriers: any;
  listId: any
  carrierLists: any = [];

  constructor(private http: ServicesService, private route: Router, private router: ActivatedRoute) {
    this.listId = this.router.snapshot.params['id']
  }

  ngOnInit(): void {
    this.http.getCarrierListBySaveList(this.listId).subscribe((res: any) => {
      console.log(res);

      this.carrierLists = res.carriers;
      console.log(this.carrierLists);

    })
    this.carriers = this.carriers?.slice(0, 4);
  }

  showAll() {
    this.showAllFreight = !this.showAllFreight;
    if (this.showAllFreight) {
      this.carriers = this.carriers;
    } else {
      this.carriers = this.carriers?.slice(0, 4);
    }
  }

}

