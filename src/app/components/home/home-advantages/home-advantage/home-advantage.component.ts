import {Component, Input} from '@angular/core';
import {Advantage} from '../../../../models/advantage';

@Component({
  selector: 'advantage',
  templateUrl: 'home-advantage.component.html',
  styleUrls: ['home-advantage.component.sass']
})
export class AdvantageComponent {
  @Input()
  model: Advantage;
}
