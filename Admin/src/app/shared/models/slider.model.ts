import { BaseModel } from './base.model';
import { Fichier } from './fichier.model';

export class Slider extends BaseModel {
  title: string;
  content: string;
  image: Fichier;
  order: number;

  constructor(arg?: any) {
    super(arg);
    if (arg) {
      for (const key in arg) {
        if (key === 'image') {
          this.image = new Fichier(arg.image);
        } else if (Object.prototype.hasOwnProperty.call(arg, key)) {
          this[key] = arg[key];
        }
      }
    }
  }
}
