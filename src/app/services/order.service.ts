import {Injectable} from '@angular/core';
import {Http, Headers, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/map';
import * as Mustache from 'mustache';
import {Order} from '../models/order';
import {environment} from '../../environments/environment';

@Injectable()
export class OrderService {
  template: string;

  constructor(private http: Http) {
    http.get('mail/template.html')
      .map(res => res.text())
      .subscribe(html => this.template = html);
  }

  sendOrder(order: Order) {
    const emailData = {
      name: order.name,
      phone: order.phone,
      email: order.email,
      comments: order.comments,
    };

    if (order.product) {
      Object.assign(emailData, {
        productTitle: order.product.title,
        productPrice: order.product.price,
        productType: order.product.triggers && order.product.triggers.find(trigger => trigger.checked).title
      });
    }
    const output = Mustache.render(this.template, emailData);
    const headers = new Headers();
    const params = new URLSearchParams();

    params.set('from', environment.email);
    params.set('to', environment.email);
    params.set('subject', `Заказ: ${order.name}`);
    params.set('html', output);

    headers.set('Access-Control-Allow-Origin', '*');
    headers.set('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post(environment.emailEndpoint, params, {headers: headers}).subscribe(() => {
      console.log('Sent');
    });
  }
}
