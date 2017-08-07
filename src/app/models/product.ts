import {Param} from './param';
import {Trigger} from './trigger';

export class Product {
  id: number;
  title: string;
  description: string;
  imagePath: string;
  triggers: Array<Trigger>;
  params: Array<Param>;
  basePrice: number;

  constructor(title, description, imagePath, triggers?, params?, basePrice?) {
    this.title = title;
    this.description = description;
    this.imagePath = imagePath;
    this.triggers = triggers;
    this.params = params;
    this.basePrice = basePrice || 0;
  }

  get price() {
    let price = this.basePrice;
    if (this.triggers) {
      price += this.triggers.find(trigger => trigger.checked).price;
    }
    return price;
  }
}
