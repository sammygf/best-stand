import {Component} from '@angular/core';
import {Advantage} from '../../../models/advantage';

@Component({
  selector: 'home-advantages',
  templateUrl: './home-advantages.component.html',
  styleUrls: ['./home-advantages.component.sass']
})
export class HomeAdvantagesComponent {
  advantages: Array<Advantage>;

  constructor() {
    this.advantages = [
      new Advantage(
        'Нестандартные решения',
        `Изделия для рекламы и праздников очень часто требуют нестандартных подходов и решений.
         Мы всегда готовы предложить их, реализовав ваши особые пожелания и идеи.`,
        'icon_3.svg'
      ),
      new Advantage(
        'Комплексный подход',
        `Мы оказываем весь спектр услуг от разработки и печати макета, до доставки и сборки готового изделия. 
         Что особенно актуально при плотном графике организатора мероприятий.`,
        'icon_1.svg'
      ),
      new Advantage(
        'Приемлемые цены',
        `Оптимальное соотношение качества и цены достигается нами за счет использования простых, 
         но надежных материалов отечественного производства — картона, пластика и металлических труб.`,
        'icon_2.svg'
      )
    ];
  }
}
