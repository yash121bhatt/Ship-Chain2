import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AdminServicesService } from '../../myservices/admin-services.service';

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.css'
})
export class BlogListComponent {

  getBlog: any = [];

  constructor(private adminServices: AdminServicesService) { }

  ngOnInit() {
    this.adminServices.adminBlogList().subscribe((res: any) => {
      console.log(res);

      this.getBlog = res.blogs;
    })
  }


}
