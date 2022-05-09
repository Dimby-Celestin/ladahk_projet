import { BaseModel } from './base.model';
import { Fichier } from './fichier.model';

export class BusinessTransfer extends BaseModel {
    businessId: string;
    oldOwner: string;
    oldEmail: string;
    oldPhone: string;
    newOwner: string;
    newEmail: string;
    newPhone: string;
    status: StatutEnum;
    refusedReason: string;

  constructor(arg?: any) {
    super(arg);
  }
}
export enum StatutEnum {
    valid = 'valid',
    refused = 'refused',
    pending = 'pending',
    draft = 'draft'
  }