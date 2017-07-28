import {Component} from '@angular/core';
import {HomeReviews} from '../../../models/home-reviews';


@Component({
  selector: 'home-reviews',
  templateUrl: './home-reviews.component.html',
  styleUrls: ['./home-reviews.component.sass']
})
export class HomeReviewsComponent {

  reviews: Array<HomeReviews>;

  constructor() {
    this.reviews = [
      new HomeReviews(
        'Николай',
        'частный заказчик',
        `Нас работа Best stand полностью удовлетворила. Заказ у нас был не большой, 
        но зато очень важный. Все было сделано качественно, быстро и в срок. Спасибо!`,
        'comment_1.jpg'
      ),
      new HomeReviews(
        'Марина',
        'руководитель ивент-агентства',
        `Нравится, что Best stand берет на себя весь комплекс работ по стендам. 
         У нас много параллельных задач, удобно, когда по органиации тебя страхует надежный подрядчик.`,
        'comment_2.jpg'
      ),
      new HomeReviews(
        'Сергей',
        'маркетолог',
        `Спасают каждый раз, когда стенд нужен «на вчера». Best stand никогда нас не подводил, 
         несмотря на то, что мы достаточно «сложный» (в плане сроков и «задумок») заказчик.`,
        'comment_3.png'
      )
    ];
  }

}
