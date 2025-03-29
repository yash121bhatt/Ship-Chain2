import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { BlogService } from '../../myservices/blog.service';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  cards = [
    { title: 'Card 1', content: 'Content 1' },
    { title: 'Card 2', content: 'Content 2' },
    { title: 'Card 3', content: 'Content 3' },
    { title: 'Card 4', content: 'Content 4' },
    { title: 'Card 5', content: 'Content 5' },
    { title: 'Card 6', content: 'Content 6' }
  ];


  pageSize = 3;
  currentPage = 1;
  page: any;
  listBlog: any;

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.blogService.blogPage({ page: this.page }).subscribe((res: any) => {
      console.log(res);

      this.listBlog = res.blogs
    })
  }

  get paginatedCards() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    return this.cards.slice(startIndex, startIndex + this.pageSize);
  }

  nextPage() {
    if (this.currentPage * this.pageSize < this.cards.length) {
      this.currentPage++;
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
}

