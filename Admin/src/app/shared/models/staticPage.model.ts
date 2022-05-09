import { BaseModel } from './base.model';

export class StaticPage extends BaseModel {
  title: string;
  content: string;
  kind: KindEnum;

  constructor(arg?: any) {
    super(arg);
  }
}
export enum KindEnum {
  faq = 'faq'
}
