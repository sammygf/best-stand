import {Component, Input} from '@angular/core';
import {HomeOffer} from '../../../../models/home-offer';
import {AppRoutingModule} from '../../../../app-routing.module';

@Component({
  selector: 'home-offer',
  templateUrl: 'home-offer.component.html',
  styleUrls: ['home-offer.component.sass'],
  providers: [AppRoutingModule]
})
export class HomeOfferComponent {
  @Input()
  model: HomeOffer;
  routePath: string;

  constructor() {
    this.routePath = AppRoutingModule.routeUrls.PRODUCTS;
  }
}
