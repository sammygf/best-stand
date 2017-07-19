import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.sass']
})
export class SpinnerComponent implements OnInit {

  loaded: boolean;

  constructor() {
    this.loaded = false;
    setTimeout(() => {
      this.loaded = true;
    }, 2000);
  }

  ngOnInit() {
  }

}
