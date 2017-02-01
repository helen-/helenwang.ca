import { Component, Input } from '@angular/core';

@Component({
  selector: 'travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./header.component.css']
})

export class TravelComponent {
  @Input()
  displayTravel: Boolean;
}
