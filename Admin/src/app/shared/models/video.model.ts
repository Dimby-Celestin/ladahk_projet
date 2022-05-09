import { BaseModel } from './base.model';

export class Video extends BaseModel {
  type: string;
  url: string;
  slug: string;

  constructor(arg?: any) {
    super(arg);
  }
}
