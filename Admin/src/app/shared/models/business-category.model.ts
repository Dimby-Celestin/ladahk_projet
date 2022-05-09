import { BaseModel } from './base.model';
import { Fichier } from './fichier.model';

export class BusinessCategory extends BaseModel {
  name: string;
  ableToTransfertRegistration: boolean;
  createPropertyListing: boolean;
  price: string;
  parent_id: string;
  renewal_fee: string;
  register_fee: string;

  constructor(arg?: any) {
    super(arg);
  }
}