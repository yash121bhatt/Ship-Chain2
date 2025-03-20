import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, MatCardModule , MatButtonModule , MatIconModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  @Output() newPassword = new EventEmitter<any>();
  showChangePassword : boolean =  false;

  changePassword() {
    this.showChangePassword = !this.showChangePassword;

  }

  submitPassword(newPassword: string, confirmPassword: string) {
    if (newPassword === confirmPassword) {
      this.newPassword.emit(newPassword);
      this.showChangePassword = false;
    }
  }
}

