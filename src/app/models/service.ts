export class Service {
  title: string;
  description: string;
  imagePath: string;
  routeUrl: string;

  constructor(title, description, imagePath, routeUrl) {
    this.title = title;
    this.description = description;
    this.imagePath = imagePath;
    this.routeUrl = routeUrl;
  }
}
