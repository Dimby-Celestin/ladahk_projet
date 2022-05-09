import { BaseModel } from "./base.model";
import { jsonIgnore } from 'json-ignore';
import { Fichier } from './fichier.model';

export class Gallery extends BaseModel {
  document_id: string;
  category_id: string;
  document: Fichier;
  author_id: string;

  constructor(arg?: any, folder?) {
    super(arg);
    if (arg.document) {
      this.document = new Fichier(arg.document);
    }
  }
}
