import {Component, Input} from '@angular/core';
import {HomeReviews} from '../../../../models/home-reviews';


@Component({
  selector: 'home-review',
  templateUrl: './home-review.component.html',
  styleUrls: ['./home-review.component.sass']
})
export class HomeReviewComponent {

  @Input()
  model: HomeReviews;

  constructor() {
  }

}
