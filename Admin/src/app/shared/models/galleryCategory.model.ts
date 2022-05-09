import { BaseModel } from "./base.model";

export class GalleryCategory extends BaseModel {
  name: string;
  slug: string;

  constructor(arg?: any, folder?) {
    super(arg);
  }
}
