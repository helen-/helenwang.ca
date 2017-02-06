import { Component, Input } from '@angular/core';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./header.component.css']
})

export class AboutComponent {
  @Input()
  displayAbout: Boolean;
}
