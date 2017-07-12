import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/home/home.component';

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
    path: 'requirements',
    children: [],
    data: {
      title: 'Требования к макетам'
    }
  },
  {
    path: 'delivery',
    children: [],
    data: {
      title: 'Доставка и монтаж'
    }
  },
  {
    path: 'services',
    children: [],
    data: {
      title: 'Услуги'
    }
  },
  {
    path: 'contacts',
    children: [],
    data: {
      title: 'Контакты'
    }
  },
  {
    path: 'photo-stand',
    children: [],
    data: {
      title: 'Фотостенд',
      isSide: true
    }
  },
  {
    path: 'press-wall',
    children: [],
    data: {
      title: 'Пресс-волл',
      isSide: true
    }
  },
  {
    path: 'figure',
    children: [],
    data: {
      title: 'Ростовые фигуры',
      isSide: true
    }
  },
  {
    path: 'sensormatic',
    children: [],
    data: {
      title: 'Сенсорматики',
      isSide: true
    }
  },
  {
    path: 'mobile-stand',
    children: [],
    data: {
      title: 'Мобильные стенды',
      isSide: true
    }
  },
  {
    path: 'signboard',
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
  getRoutes(isSide: boolean) {
    return routes.filter((route) => {
      return route.path.length > 0 && !!route.data.isSide === isSide;
    });
  }
}
