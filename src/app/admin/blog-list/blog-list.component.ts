import { Component } from '@angular/core';
import { AdminServicesService } from '../admin-services.service';

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [],
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.css'
})
export class BlogListComponent {
  blockData: any = []
  constructor(private services: AdminServicesService) { }

  ngOnInit() {
    this.services.blogList().subscribe((res: any) => {
      this.blockData = res.blogs
    })
  }

}
