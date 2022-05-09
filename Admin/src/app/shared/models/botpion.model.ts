import { BaseModel } from './base.model';

export class Boption extends BaseModel {
  name: string;

  constructor(arg?: any) {
    super(arg);
  }
}