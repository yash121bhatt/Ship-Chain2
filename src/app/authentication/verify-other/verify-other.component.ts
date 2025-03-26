import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from '../../myservices/services.service';
import { CommonModule } from '@angular/common';
import { MatSnackBar, MatSnackBarHorizontalPosition , MatSnackBarVerticalPosition} from '@angular/material/snack-bar';


@Component({
  selector: 'app-verify-other',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './verify-other.component.html',
  styleUrl: './verify-other.component.css'
})
export class VerifyOtherComponent {

queryData: any;
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
   private _snackBar = inject(MatSnackBar);

  constructor(private activeRoute:ActivatedRoute , private services:ServicesService, private router:Router){
    this.queryData = this.activeRoute.snapshot.queryParams;
    console.log(this.queryData);
    
  }

  ngOnInit(){
      this.services.VerifyOthersEmailAddress(this.queryData).subscribe((res:any)=>{
        console.log(res);
        if (res.success) {
          this.openSnackBar(res.message);
          this.router.navigate(['/dashboard']);
          
        } 
      },(err:any)=>{
        this.openSnackBar(err.message); 
      })
    }

    openSnackBar(message: string) {
      const snackRef = this._snackBar.open(message, undefined, {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
        duration: 3000,
        panelClass: ['snack-bar-animation']
      });
    }

}
