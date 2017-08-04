import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Product} from '../../../models/product';
import {ProductsService} from '../../../services/products.service';
import {AppRoutingModule} from '../../../app-routing.module';

@Component({
  selector: 'product-overview',
  templateUrl: './product-overview.component.html',
  styleUrls: ['./product-overview.component.sass']
})
export class ProductOverviewComponent implements OnInit, OnDestroy {
  private productChanged: any;
  product: Product;
  orderRoutePath: string;

  constructor(private route: ActivatedRoute,
              private productsService: ProductsService) {
    this.orderRoutePath = AppRoutingModule.routeUrls.ORDER;
  }

  ngOnInit() {
    this.productChanged = this.route.params.subscribe(params => {
      const id = +params['id'];
      this.product = this.productsService.getProduct(id);
    });
  }

  ngOnDestroy() {
    this.productChanged.unsubscribe();
  }

  triggerChanged(index) {
    this.product.triggers.forEach((trigger, i) => {
      trigger.checked = index === i;
    });
  }
}
