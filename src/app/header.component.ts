import { Component } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  displayTravels: Boolean;
  displayAbout: Boolean;

  toggleTravels(): void {
    this.displayAbout = false;
    this.displayTravels = true;
  }

  toggleAbout(): void {
    this.displayTravels = false;
    this.displayAbout = true;
  }
}
