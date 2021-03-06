import {Component, OnInit} from '@angular/core';
import {HomeOffer} from '../../../models/home-offer';
import {AppRoutingModule} from '../../../app-routing.module';

@Component({
  selector: 'home-offers',
  templateUrl: './home-offers.component.html',
  styleUrls: ['./home-offers.component.sass']
})

export class HomeOffersComponent implements OnInit {

  offers: Array<HomeOffer>;

  constructor() {
    this.offers = [
      new HomeOffer(
        'Фотостенды',
        'Для праздников',
        `Отличное развлечение для праздника и эффективный рекламный
         ход для привлечения внимания и распространения фото с вашей рекламой.`,
        'superman.png',
        1
      ),
      new HomeOffer(
        'Пресс-волы',
        'Для рекламы',
        `Печать пресс-воллов эффективное решение как для мероприятий официальных
         мероприятий, так и для неформальных торжеств, для свадьбы или презентаций.`,
        'press-wall.png',
        2
      ),
      new HomeOffer(
        'Сенсорматики',
        'Для рекламы',
        `Сенсорматики (или чекпойнты), — чехлы для антикражных ворот в магазинах,
         супермаркетах и бутиках. Помогут рассказать посетителям об акциях, скидках, новинках.`,
        'sensormatic.png',
        4
      ),
      new HomeOffer(
        'Ростовые фигуры',
        'Для праздников',
        `Ростовые фигуры — действенный способ привлечения внимания к магазину, лавке,
         торговому или выставочному стенду. Разработка дизайна, печать ростовых фигур.`,
        'figure.png',
        3
      ),
      new HomeOffer(
        'Мобильные стенды',
        'Для рекламы',
        `Различные выносные стенды — баннеры, штендеры, ролл-апы, «пауки» и другие мобильные
         информационно-рекламные стенды для продвижения ваших услуг или товаров.`,
        'mobile-stand.png',
        6
      ),
      new HomeOffer(
        'Лайтбоксы',
        'Для мероприятий',
        `Изготовление и монтаж лайтбоксов для решения различных рекламных задач вашего бизнеса.
         Надежные лайтбоксы — классика наружной рекламы.`,
        'lightbox.png',
        7
      )
    ];
  }

  ngOnInit() {
  }

}
