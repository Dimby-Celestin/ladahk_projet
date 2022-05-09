import { BaseModel } from './base.model';
import { Fichier } from './fichier.model';

export class Categorie extends BaseModel {
  name: string;
  slug: string;
  image: Fichier;

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
