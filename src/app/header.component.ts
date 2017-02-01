import { Component } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  displayPhotography: Boolean;
  displayTravel: Boolean;

  togglePhotography(): void {
    this.displayTravel = false;
    this.displayPhotography = true;
  }

  toggleTravel(): void {
    this.displayPhotography = false;
    this.displayTravel = true;
  }
}
