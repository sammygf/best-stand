import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'rounded-button',
  templateUrl: './rounded-button.component.html',
  styleUrls: ['./rounded-button.component.sass']
})
export class RoundedButtonComponent implements OnInit {

  @Input()
  type: string;

  constructor() {
  }

  ngOnInit() {
    this.type = this.type || 'button';
  }
}
