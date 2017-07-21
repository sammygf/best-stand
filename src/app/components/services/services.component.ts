import {Component, OnInit} from '@angular/core';
import {Service} from '../../models/service';

@Component({
  selector: 'services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.sass']
})
export class ServicesComponent implements OnInit {
  services: Array<Service>;

  constructor() {
    this.services = [
      new Service(
        'Дизайн и  подготовка  макетов',
        `Дизайнеры BEST STAND создадут макет для печати 
         в установленные сроки, учитывая все ваши пожелания и задачи. 
         Мы выполним все работы по подготовке макета и, после согласования с вами, отправим макет в печать.`,
        'design.svg',
        'Подробнее о требованиях  к макетам'
      ),
      new Service(
        'Широкоформатная  и цифровая  печать',
        `Мы оказываем услуги по любой широкоформатной печати в Киеве, а также цифровой печати для небольших изделий и тиражей. 
         BEST STAND осуществляет как предпечатную, так и послепечатную обработку, а также оклейку или монтаж стендов на месте сборки.`,
        'print.svg',
        'Виды рекламных изделий, которые вы можете заказать'
      ),
      new Service(
        'Монтаж',
        `Специалисты BEST STAND выполняют монтаж любых готовых рекламных изделий на указанной вами площадке. 
         Мы работаем качественно, аккуратно и оперативно.`,
        'installation.svg',
        'Подробнее о стоимости монтажа и доставки'
      )
    ];
  }

  ngOnInit() {
  }

}
