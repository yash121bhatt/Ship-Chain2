import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import {MatChipsModule} from '@angular/material/chips';
import { MatToolbar } from '@angular/material/toolbar';
import {MatMenu} from '@angular/material/menu';
import {MatNavList} from '@angular/material/list';
import { MatListItem } from '@angular/material/list';
import {MatDrawerContent} from '@angular/material/sidenav';
import {MatDrawerContainer} from '@angular/material/sidenav';
import { MatDrawer } from '@angular/material/sidenav';
import { HeaderComponent } from "./pages/header/header.component";
import { FooterComponent } from "./pages/footer/footer.component";                            

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatButtonModule, MatIcon, MatChipsModule, MatToolbar, MatMenu, MatNavList, MatListItem, MatDrawerContent, MatDrawerContainer, MatDrawer, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  badgevisible = false;
  badgevisibility() {
    this.badgevisible = true;
  }
  

}
