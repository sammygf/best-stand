import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Order} from '../../models/order';
import {OrderService} from '../../services/order.service';

@Component({
  selector: 'contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.sass'],
  providers: [OrderService]
})
export class ContactsComponent {
  confirmed = false;
  order: Order;
  orderForm = new FormGroup({
    name: new FormControl(null, Validators.required),
    email: new FormControl(null, [Validators.email]),
    comments: new FormControl(null, Validators.required)
  });

  constructor(private orderService: OrderService) {
    this.order = new Order();
  }

  get name() {
    return this.orderForm.get('name');
  }

  get email() {
    return this.orderForm.get('email');
  }

  get comments() {
    return this.orderForm.get('comments');
  }

  submitOrder() {
    if (this.orderForm.valid) {
      this.confirmed = true;
      this.orderService.sendOrder(this.order);
      setTimeout(() => {
        this.order = new Order();
        this.orderForm.markAsUntouched();
        this.confirmed = false;
      }, 3000);
    } else {
      this.orderForm.markAsTouched();
    }
  }
}
