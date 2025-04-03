import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CKEditorModule, CKEditorComponent } from '@ckeditor/ckeditor5-angular';

@Component({
  selector: 'app-add-blog',
  standalone: true,
  imports: [CommonModule, CKEditorModule],
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }



}

