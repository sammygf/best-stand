import {Component, Input} from '@angular/core';
import {Service} from '../../../models/service';
@Component({
  selector: 'service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.sass']
})
export class ServiceComponent {
  @Input()
  model: Service;

  constructor() {

  }
}
