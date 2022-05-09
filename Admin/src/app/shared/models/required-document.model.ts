import { BaseModel } from './base.model';
import { Fichier } from './fichier.model';
import { jsonIgnore } from 'json-ignore';

export class RequiredDocument extends BaseModel {
  name: string;
  business_type: BusinessTypeEnum;
  business_category_id: string;
  ownership: number;
  @jsonIgnore()
  doc:  any;

  constructor(arg?: any) {
    super(arg);
  }
}
export enum BusinessTypeEnum {
  hotel_restaurant = 'hotel_restaurant',
  guesthouse = 'guesthouse',
  travel_agent = 'travel_agent',
  homestay = 'homestay',
}
export const BusinessTypeValues = [
  {id: BusinessTypeEnum.hotel_restaurant, value: 'Hotel / Restaurant / Camp'},
  {id: BusinessTypeEnum.guesthouse, value: 'Guest house'},
  {id: BusinessTypeEnum.travel_agent, value: 'Travel agent'},
  {id: BusinessTypeEnum.homestay, value: 'Homestay'},
];

