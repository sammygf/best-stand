import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Product} from '../../../models/product';
import {ProductsService} from '../../../services/products.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Order} from '../../../models/order';
import {OrderService} from '../../../services/order.service';
import {AppRoutingModule} from '../../../app-routing.module';

@Component({
  selector: 'product-order',
  templateUrl: './product-order.component.html',
  styleUrls: ['./product-order.component.sass'],
  providers: [ProductsService, OrderService]
})
export class ProductOrderComponent implements OnInit, OnDestroy {
  private productChanged: any;
  product: Product;
  order: Order;

  orderForm = new FormGroup({
    name: new FormControl(null, Validators.required),
    phone: new FormControl(null, Validators.required),
    email: new FormControl(null, Validators.email),
    comments: new FormControl()
  });

  constructor(private route: ActivatedRoute,
              private productsService: ProductsService,
              private orderService: OrderService,
              private router: Router) {
    this.order = new Order();
  }

  get name() {
    return this.orderForm.get('name');
  }

  get phone() {
    return this.orderForm.get('phone');
  }

  get email() {
    return this.orderForm.get('email');
  }

  get comments() {
    return this.orderForm.get('comments');
  }

  submitOrder() {
    if (this.orderForm.valid) {
      this.order.product = this.product;
      this.orderService.sendOrder(this.order);
      this.router.navigate([`../${AppRoutingModule.routeUrls.ORDER_COMPLETE}`], {relativeTo: this.route});
      setTimeout(() => {
        this.router.navigateByUrl('/');
      }, 3000);
    } else {
      this.orderForm.markAsTouched();
    }
  }

  ngOnInit() {
    this.productChanged = this.route.parent.params.subscribe(params => {
      const id = +params['id'];
      this.product = this.productsService.getProduct(id);
    });
  }

  ngOnDestroy() {
    this.productChanged.unsubscribe();
  }
}
