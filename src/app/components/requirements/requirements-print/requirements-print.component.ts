import {Component} from '@angular/core';
import {RequirementPrint} from '../../../models/requirement-print';

@Component({
  selector: 'requirements-print',
  templateUrl: './requirements-print.component.html',
  styleUrls: ['./requirements-print.component.sass']
})
export class RequirementsPrintComponent {

  model: Array<RequirementPrint>;

  constructor() {
    this.model = [
      new RequirementPrint('Adobe Photoshop', '(*.psd, *.tiff)', 'app-photoshop.png'),
      new RequirementPrint('Adobe Illustrator', '(*.eps, *.ai)', 'app-illustrator.png'),
      new RequirementPrint('CorelDraw', '(*.cdr)', 'app-coreldraw.png'),
      new RequirementPrint('Adobe Reader', '(*.pdf)', 'app-acrobat.png')
    ];
  }
}
