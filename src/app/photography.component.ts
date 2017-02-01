import { Component, Input } from '@angular/core';

@Component({
  selector: 'photography',
  templateUrl: './photography.component.html',
  styleUrls: ['./header.component.css']
})

export class PhotographyComponent {
  @Input()
  displayPhotography: Boolean;
}
