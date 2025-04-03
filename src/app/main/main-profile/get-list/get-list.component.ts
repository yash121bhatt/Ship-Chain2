import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { ServicesService } from '../../../myservices/services.service';

@Component({
  selector: 'app-get-list',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './get-list.component.html',
  styleUrl: './get-list.component.css'
})
export class GetListComponent {
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  private _snackBar = inject(MatSnackBar);
  saveListData: any = [];

  constructor(private listApi: ServicesService) { }

  ngOnInit(): void {
    console.log('hello');

    this.getBlogList();
  }

  getBlogList() {
    console.log('function called');

    this.listApi.getAllList().subscribe((res: any) => {
      console.log(res);


      console.log(res.success);

      this.saveListData = res.lists
      this.openSnackBar(res.message);


    },
      (err: any) => {
        this.openSnackBar(err.message);
      }
    )
  }

  openSnackBar(message: string) {
    const snackRef = this._snackBar.open(message, undefined, {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 3000,
      panelClass: ['snack-bar-animation']
    });
  }

  deleteList(id: any) {
    this.listApi.deleteList(id).subscribe((res: any) => {
      if (res.success == true) {
        this.openSnackBar(res.message);
        this.getBlogList();
      }
    }, (err: any) => {
      this.openSnackBar(err.message);
    }
    )
  }

}
