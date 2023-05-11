import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() public icon!: string
  @Input() public label!: string
  @Input() public route!: string
  @Input() public color!: string
}
