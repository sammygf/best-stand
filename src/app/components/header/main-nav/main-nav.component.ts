import {Component} from '@angular/core';
import {Route} from '@angular/router';
import {AppRoutingModule} from '../../../app-routing.module';

@Component({
  selector: 'main-nav',
  templateUrl: 'main-nav.component.html',
  styleUrls: ['main-nav.component.sass']
})
export class MainNavComponent {
  routes: Array<Route>;

  constructor() {
    this.routes = AppRoutingModule.getRoutes();
  }
}
