import {Component, OnInit} from '@angular/core';
import {HomeReviews} from '../../../models/home-reviews';


@Component({
  selector: 'home-reviews',
  templateUrl: './home-reviews.component.html',
  styleUrls: ['./home-reviews.component.sass']
})
export class HomeReviewsComponent implements OnInit {

  reviews: Array<HomeReviews>;


  constructor() {
    this.reviews = [
      new HomeReviews(
        ' Берстенёв Стас',
        'Менеджер',
        `Сьогодні  отримала замовлення.  Дякую за швидку доставку.`,
        '#'
      ),
      new HomeReviews(
        ' Берстенёв Стас',
        'Директор',
        `Хочу выразить благодарность консультанту Зарецкой Анне. 
        Потрясающий подход к клиенту. Очень приятный, квалификацированый сотрудник.`,
        '#'
      ),
      new HomeReviews(
        ' Берстенёв Стас',
        'Студент',
        `Все изделия, произведенные нашей компанией, отличаются высоким качеством, ярким, красочным.`,
        '#'
      ),
    ];
  }

  ngOnInit() {
  }

}
