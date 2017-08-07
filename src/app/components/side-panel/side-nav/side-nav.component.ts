import {Component} from '@angular/core';
import {AppRoutingModule} from '../../../app-routing.module';
import {ProductsService} from '../../../services/products.service';

@Component({
  selector: 'side-nav',
  templateUrl: 'side-nav.component.html',
  styleUrls: ['side-nav.component.sass'],
  providers: [ProductsService]
})
export class SideNavComponent {
  routes: Array<any> = [];

  constructor(productsService: ProductsService) {
    productsService.getProducts().forEach((product) => {
      this.routes.push({
        title: product.title,
        path: `${AppRoutingModule.routeUrls.PRODUCTS}/${product.id}`
      });
    });
  }
}
