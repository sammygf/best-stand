import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Product} from '../../models/product';
import {ProductsService} from '../../services/products.service';
// import {AppRoutingModule} from '../../app-routing.module';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass'],
  providers: [ProductsService]
})
export class ProductComponent implements OnInit, OnDestroy {
  private productChanged: any;
  product: Product;

  constructor(private route: ActivatedRoute,
              private productsService: ProductsService) {
  }

  ngOnInit() {
    this.productChanged = this.route.params.subscribe(this.onProductChanged.bind(this));
  }

  ngOnDestroy() {
    this.productChanged.unsubscribe();
  }

  private onProductChanged(params) {
    const id = +params['id'];
    this.product = this.productsService.getProduct(id);
  }
}
