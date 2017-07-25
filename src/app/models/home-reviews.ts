export class HomeReviews {
  title: string;
  subTitle: string;
  description: string;
  imagePath: string;

  constructor(title, subTitle, description, imagePath?) {
    this.title = title;
    this.subTitle = subTitle;
    this.description = description;
    this.imagePath = imagePath;
  }
}
