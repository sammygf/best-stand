import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Product} from '../../models/product';
import {ProductsService} from '../../services/products.service';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass'],
  providers: [ProductsService]
})
export class ProductComponent implements OnInit, OnDestroy {
  private productChanged: any;
  product: Product;
  price = 0;

  constructor(private route: ActivatedRoute, private productsService: ProductsService) {
  }

  ngOnInit() {
    this.productChanged = this.route.params.subscribe(params => {
      const id = +params['id'];
      this.product = this.productsService.getProduct(id);
      this.price = this.product.price;
      if (this.product.triggers) {
        this.triggerChanged(this.product.triggers.find(trigger => trigger.checked));
      }
    });
  }

  ngOnDestroy() {
    this.productChanged.unsubscribe();
  }

  triggerChanged(trigger) {
    this.price = this.product.price + trigger.price;
  }
}
