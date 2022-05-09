import { jsonIgnore, jsonIgnoreReplacer } from "json-ignore";
import { BaseModel } from "./base.model";
import { BusinessCategory } from './business-category.model';
import { Boption } from './botpion.model';

export class Business extends BaseModel {
  email: string;
  name: string;
  phone: string;
  password: string;
  city: string;
  address: string;
  lat: number;
  lng: number;
  status: BusinessStatusEnum;
  documentStatus: documentStatutEnum;
  displayStatus: documentStatutEnum;
  type: string;
  business_category_id: string;
  comment: string;
  category: BusinessCategory;
  banner: Document;
  banner_id: string;
  thumbnail: Document;
  thumbnail_id: string;
  price_start: number;
  website_address: string;
  about: string;
  address_business: string;
  nearby: string;
  highlights: Boption[];
  amenities: Boption[];
  rejectedReason: string;
  
  @jsonIgnore()
  get classNameDocs(): string {
    if (this.documentStatus === documentStatutEnum.pending) {
      return 'btn-warning';
    } else if (this.documentStatus === documentStatutEnum.refused) {
      return 'btn-danger';
    } else {
      return 'btn-success';
    }
  }

  @jsonIgnore()
  get classNameDisp(): string {
    if (this.displayStatus === documentStatutEnum.pending) {
      return 'btn-warning';
    } else if (this.displayStatus === documentStatutEnum.refused) {
      return 'btn-danger';
    } else {
      return 'btn-success';
    }
  }

  constructor(arg?: any) {
    super(arg);
  }


  isValidEmail() {
    const regex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    return regex.test(this.email);
  }
  prepareForSending() {
    const copy: any = {};
    if (this.email) {
      const arr = this.email.split('@');
    }
    try {
      const data = JSON.parse(JSON.stringify(this, jsonIgnoreReplacer));
      for (const key in data) {
        if (Object.prototype.hasOwnProperty.call(data, key)) {
          if (data[key] === null) {
          } else {
            if (key === "extra") {
              copy[key] = this[key].prepareForSending();
            } else {
              copy[key] = data[key];
            }
          }
        }
      }
    } catch (e) {}
    return copy;
  }
}
  
export enum BusinessStatusEnum {
  new = 'new',
  registering = 'registering',
  waiting_form = 'waiting_form',
  under_review = 'under_review',
  waiting_payment = 'waiting_payment',
  ignoring_guidelines = 'ignoring_guidelines',
  document_missing = 'document_missing',
  valid = 'valid',
  rejected = 'rejected',
}
export const BusinessStatus = [
  {_id: BusinessStatusEnum.new, label: 'New' },
  {_id: BusinessStatusEnum.registering, label: 'Registering' },
  {_id: BusinessStatusEnum.waiting_form, label: 'Waiting Form' },
  {_id: BusinessStatusEnum.under_review, label: 'Under Review' },
  {_id: BusinessStatusEnum.waiting_payment, label: 'Waiting Payment' },
  {_id: BusinessStatusEnum.ignoring_guidelines, label: 'Ignoring Guidelines' },
  {_id: BusinessStatusEnum.document_missing, label: 'Document Missing' },
  {_id: BusinessStatusEnum.valid, label: 'Valid' },
  {_id: BusinessStatusEnum.rejected, label: 'Rejected' }
];
export const BusinessStatusNew = [
  {_id: BusinessStatusEnum.registering, label: 'Approve' },
  {_id: BusinessStatusEnum.rejected, label: 'Rejected' }
];
export const BusinessStatusRegistering = [
  {_id: BusinessStatusEnum.waiting_form, label: 'Approve' },
  {_id: BusinessStatusEnum.rejected, label: 'Rejected' }
];
export const BusinessStatusUnderChoice = [
  {_id: BusinessStatusEnum.waiting_payment, label: 'Waiting Payment' },
  {_id: BusinessStatusEnum.ignoring_guidelines, label: 'Ignoring Guidelines' },
  {_id: BusinessStatusEnum.document_missing, label: 'Document Missing' },
  {_id: BusinessStatusEnum.valid, label: 'Valid' },
  {_id: BusinessStatusEnum.rejected, label: 'Rejected' }
];
export enum documentStatutEnum {
  pending = 'pending',
  valid = 'valid',
  refused = 'refused'
}
export const DocumentStatus = [
  documentStatutEnum.pending,
  documentStatutEnum.valid,
  documentStatutEnum.refused
];
