import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterLink } from '@angular/router';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, AutocompleteLibModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  searchName !: string
  keyword: string = 'name';

  public countries = [
    {
      id: 1,
      name: 'New York'
    },
    {
      id: 2,
      name: 'Ottava'
    },
    {
      id: 3,
      name: 'Sad-Luis'
    },
    {
      id: 4,
      name: 'Washington'
    },
    {
      id: 5,
      name: 'Kiwi'
    }
  ]



  constructor(private router: Router) {
  }



  logout() {
    localStorage.clear();
    this.router.navigate(['/']);
  }

  selected(item: any) {
    this.searchName = item.searchName
  }

}

