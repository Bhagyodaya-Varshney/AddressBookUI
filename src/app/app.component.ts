import { Component } from '@angular/core';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AddressDetailsComponent } from './address-details/address-details.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [NavBarComponent, AddressDetailsComponent, RouterLink, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AddressBookApp';
  showAddPersonDiv = false;
  toggleAddPersonDiv(){
    this.showAddPersonDiv = !this.showAddPersonDiv;
  }
}
