import {Param} from './param';
import {Trigger} from './trigger';

export class Product {
  id: number;
  title: string;
  description: string;
  imagePath: string;
  triggers: Array<Trigger>;
  params: Array<Param>;
  price: number;

  constructor(title, description, imagePath, triggers?, params?, price?) {
    this.title = title;
    this.description = description;
    this.imagePath = imagePath;
    this.triggers = triggers;
    this.params = params;
    this.price = price || 0;
  }
}
