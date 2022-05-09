import { BaseModel } from './base.model';
import { Fichier } from './fichier.model';
import { jsonIgnore } from 'json-ignore';

export class Calendar extends BaseModel {
  date: string;
  kind: CalendarKindEnum;
  title: string;

  @jsonIgnore()
  get className(): string {
    if (this.kind === CalendarKindEnum.gazetted_holiday) {
      return 'classGazetted';
    } else {
      return 'classRestricted';
    }
  }

  @jsonIgnore()
  get color(): string {
    if (this.kind === CalendarKindEnum.gazetted_holiday) {
      return '#b100ff';
    } else {
      return '#ff0031';
    }
  }

  constructor(arg?: any) {
    super(arg);
  }
}
export enum CalendarKindEnum {
    gazetted_holiday = 'gazetted_holiday',
    restricted_holiday = 'restricted_holiday',
}
export const CalendarKindValues = [
  {id: CalendarKindEnum.gazetted_holiday, value: 'Gazetted Holiday'},
  {id: CalendarKindEnum.restricted_holiday, value: 'Restricted Holiday'},

];

className: 'text-danger'

