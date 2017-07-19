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
        'Качественно',
        `Основным направлением деятельности нашей компании является производство стендов 
        из картона, пластика и металлической трубы.`,
        'figure.png'
      ),
      new Advantage(
        'Быстро',
        `Основным направлением деятельности нашей компании является производство стендов 
        из картона, пластика и металлической трубы.`,
        'figure.png'
      ),
      new Advantage(
        'Недорого',
        `Основным направлением деятельности нашей компании является производство стендов 
        Основным направлением деятельности нашей компании является производство стендов 
        из картона, пластика и металлической трубы.`,
        'figure.png'
      )
    ]
  }
}
