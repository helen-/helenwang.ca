import { Component, Input } from '@angular/core';

@Component({
  selector: 'travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./styles.css']
})

export class TravelComponent {
  @Input()
  displayTravels: Boolean;
}
