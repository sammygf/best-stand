export class Trigger {
  title: string;
  price: number;
  checked: boolean;

  constructor(title, price, checked?) {
    this.title = title;
    this.price = price;
    this.checked = !!checked;
  }
}
