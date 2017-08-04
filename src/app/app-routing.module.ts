import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {ContactsComponent} from './components/contacts/contacts.component';
import {ServicesComponent} from './components/services/services.component';
import {RequirementsComponent} from './components/requirements/requirements.component';
import {ProductComponent} from './components/product/product.component';
import {ProductOverviewComponent} from './components/product/product-overview/product-overview.component';
import {ProductOrderComponent} from './components/product/product-order/product-order.component';
import {ProductOrderCompleteComponent} from './components/product/product-order-complete/product-order-complete.component';

const routeUrls = {
  REQUIREMENTS: 'requirements',
  DELIVERY: 'delivery',
  SERVICES: 'services',
  CONTACTS: 'contacts',
  PRODUCTS: 'products',
  ORDER: 'order',
  ORDER_COMPLETE: 'order_complete'
};

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [],
    data: {
      hidden: true
    }
  },
  {
    path: routeUrls.REQUIREMENTS,
    component: RequirementsComponent,
    children: [],
    data: {
      title: 'Требования к макетам'
    }
  },
  {
    path: routeUrls.DELIVERY,
    children: [],
    data: {
      title: 'Доставка и монтаж'
    }
  },
  {
    path: routeUrls.SERVICES,
    component: ServicesComponent,
    children: [],
    data: {
      title: 'Услуги'
    }
  },
  {
    path: routeUrls.CONTACTS,
    component: ContactsComponent,
    children: [],
    data: {
      title: 'Контакты'
    }
  },
  {
    path: `${routeUrls.PRODUCTS}/:id`,
    component: ProductComponent,
    children: [
      {path: '', component: ProductOverviewComponent},
      {path: routeUrls.ORDER, component: ProductOrderComponent},
      {path: routeUrls.ORDER_COMPLETE, component: ProductOrderCompleteComponent}
    ],
    data: {
      hidden: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
  static get routeUrls() {
    return routeUrls;
  }

  static getRoutes() {
    return routes.filter(route => !route.data.hidden);
  }
}
