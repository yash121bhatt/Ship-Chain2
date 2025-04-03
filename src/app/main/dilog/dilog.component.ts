import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ServicesService } from '../../myservices/services.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-dilog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule, MatCheckboxModule, ReactiveFormsModule],
  templateUrl: './dilog.component.html',
  styleUrls: ['./dilog.component.css']
})
export class DilogComponent {

  addListForm: FormGroup;

  constructor(private httpApi: ServicesService, private fb: FormBuilder) {

    this.addListForm = this.fb.group({
      name: ['', Validators.required]
    });

  }

  ngOnInit() { }

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

}

