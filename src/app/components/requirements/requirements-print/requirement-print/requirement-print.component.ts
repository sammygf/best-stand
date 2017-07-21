import {Component, Input} from '@angular/core';
import {RequirementPrint} from '../../../../models/requirement-print';

@Component({
  selector: 'requirement-print',
  templateUrl: './requirement-print.component.html',
  styleUrls: ['./requirement-print.component.sass']
})
export class RequirementPrintComponent {

  @Input()
  model: RequirementPrint;

  constructor() {
  }
}
