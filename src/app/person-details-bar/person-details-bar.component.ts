import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-person-details-bar',
  imports: [],
  templateUrl: './person-details-bar.component.html',
  styleUrl: './person-details-bar.component.css'
})
export class PersonDetailsBarComponent {
  @Input() person: any;
}
