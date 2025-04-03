import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { BlogService } from '../../myservices/blog.service';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {

  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  private _snackBar = inject(MatSnackBar);
  getBlogCard: any = [];

  constructor(private blogApi: BlogService) { }

  ngOnInit(): void {
    this.blogApi.blogList().subscribe(
      (res: any) => {
        console.log(res);


        console.log(res);
        this.getBlogCard = res.blogs;
        this.openSnackBar(res.message);

      },
      (err: any) => {
        this.openSnackBar(err.message);
      }
    );
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, undefined, {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 3000,
      panelClass: ['snack-bar-animation']
    });
  }
}

