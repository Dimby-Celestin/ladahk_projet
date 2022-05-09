import { BaseModel } from './base.model';
import { Fichier } from './fichier.model';
import { Categorie } from './categorie.model';
import { jsonIgnore } from 'json-ignore';

export class Article extends BaseModel {
  title: string;
  content: string;
  slug: String;
  images: Fichier[] = [];
  thumbnail: Fichier;
  categories: Categorie[];
  order: number;
  @jsonIgnore()
  sliders: Fichier[] = [];

  constructor(arg?: any) {
    super(arg);
    if (arg) {
      for (const key in arg) {
        if (key === 'images') {
          this.images = arg.images.filter(i => i.type === 'gallery').map(i => new Fichier(i));
          this.sliders = arg.images.filter(i => i.type === 'banner').map(i => new Fichier(i));
        } else if (Object.prototype.hasOwnProperty.call(arg, key)) {
          this[key] = arg[key];
        }
      }
    }
  }
}
