export class HomeOffer {
  title: string;
  subTitle: string;
  description: string;
  imagePath: string;
  routeUrl: string;

  constructor(title, subTitle, description, imagePath, routeUrl) {
    this.title = title;
    this.subTitle = subTitle;
    this.description = description;
    this.imagePath = imagePath;
    this.routeUrl = routeUrl;
  }
}
