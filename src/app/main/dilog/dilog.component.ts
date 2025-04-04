import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ServicesService } from '../../myservices/services.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SharedService } from '../../myservices/shared.service';

@Component({
  selector: 'app-dilog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule, MatCheckboxModule, ReactiveFormsModule],
  templateUrl: './dilog.component.html',
  styleUrls: ['./dilog.component.css']
})
export class DilogComponent {

  addListForm: FormGroup;
  carrierId: string = '';
  saveList: any = [];
  constructor(private httpApi: ServicesService, private Shared: SharedService, private fb: FormBuilder) {

    this.addListForm = this.fb.group({
      name: ['', Validators.required]
    });

  }

  ngOnInit() {
    this.Shared.currentMessage.subscribe(message => this.carrierId = message);
    console.log('oninit string = ', this.carrierId);
    this.httpApi.getAllList().subscribe((res: any) => {
      this.saveList = res.lists
    })

  }

  addList() {
    if (this.addListForm.valid) {
      this.httpApi.addList(this.addListForm.value).subscribe((res: any) => {
        console.log(res);

        if (res.success) {
          console.log(res.success);

          this.addListForm.reset();
          // this.addListForm.get('name')?.setValue('');
        }
      });
    }

  }

  // getCheckBox(event: any) {
  //   if (event.checked) {
  //     this.httpApi.addCarrierInList(event.source.value, this.carrierId).subscribe((res: any) => {
  //       console.log(res);
  //     });
  //   } else {
  //     this.httpApi.deleteCarrierFromList(event.source.value, this.carrierId).subscribe((res: any) => {
  //       console.log(res);
  //     });
  //   }

  // }


}

