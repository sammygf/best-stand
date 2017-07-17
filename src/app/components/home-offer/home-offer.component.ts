import {Component, Input} from '@angular/core';
import {HomeOffer} from '../../models/home-offer';

@Component({
  selector: 'home-offer',
  templateUrl: './home-offer.component.html',
  styleUrls: ['./home-offer.component.sass']
})
export class HomeOfferComponent {
  @Input()
  model: HomeOffer;

  constructor() {
  }
}
