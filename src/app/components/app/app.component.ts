import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  constructor() {
    this.updateFontSize();
  }

  @HostListener('window:resize')
  onResize() {
    this.updateFontSize();
  }

  updateFontSize() {
    const html = document.documentElement;
    html.style['font-size'] = `${16 * html.clientWidth / 1440}px`;
  }
}
