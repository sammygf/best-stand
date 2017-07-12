import {Component, OnInit} from '@angular/core';
import {Route} from '@angular/router';
import {AppRoutingModule} from '../../app-routing.module';

@Component({
  selector: 'side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.sass']
})
export class SideNavComponent {
  routes: Array<Route>;

  constructor(appRouter: AppRoutingModule) {
    this.routes = appRouter.getRoutes(true);
  }
}
