import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {ContactsComponent} from './components/contacts/contacts.component';

const routeUrls = {
  REQUIREMENTS: 'requirements',
  DELIVERY: 'delivery',
  SERVICES: 'services',
  CONTACTS: 'contacts',
  PHOTO_STAND: 'photo_stand',
  PRESS_WALL: 'press_wall',
  FIGURES: 'figures',
  SENSORMATIC: 'sensormatic',
  MOBILE_STAND: 'mobile_stand',
  SIGNBOARDS: 'signboards',
  LIGHTBOX: 'lightbox'
};

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [],
    data: {
      title: 'Главная'
    }
  },
  {
    path: routeUrls.REQUIREMENTS,
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
    path: routeUrls.PHOTO_STAND,
    children: [],
    data: {
      title: 'Фотостенд',
      isSide: true
    }
  },
  {
    path: routeUrls.PRESS_WALL,
    children: [],
    data: {
      title: 'Пресс-волл',
      isSide: true
    }
  },
  {
    path: routeUrls.FIGURES,
    children: [],
    data: {
      title: 'Ростовые фигуры',
      isSide: true
    }
  },
  {
    path: routeUrls.SENSORMATIC,
    children: [],
    data: {
      title: 'Сенсорматики',
      isSide: true
    }
  },
  {
    path: routeUrls.MOBILE_STAND,
    children: [],
    data: {
      title: 'Мобильные стенды',
      isSide: true
    }
  },
  {
    path: routeUrls.SIGNBOARDS,
    children: [],
    data: {
      title: 'Вывески',
      isSide: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  get routeUrls() {
    return routeUrls;
  }
  getRoutes(isSide: boolean) {
    return routes.filter((route) => {
      return route.path.length > 0 && !!route.data.isSide === isSide;
    });
  }
}
