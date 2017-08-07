import {Component} from '@angular/core';
import {Route} from '@angular/router';
import {AppRoutingModule} from '../../app-routing.module';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent {
  routes: Array<Route>;

  constructor() {
    this.routes = AppRoutingModule.getRoutes();
  }
}
