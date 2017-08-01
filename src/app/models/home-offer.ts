export class HomeOffer {
  title: string;
  subTitle: string;
  description: string;
  imagePath: string;
  productId: number;

  constructor(title, subTitle, description, imagePath, productId) {
    this.title = title;
    this.subTitle = subTitle;
    this.description = description;
    this.imagePath = imagePath;
    this.productId = productId;
  }
}
