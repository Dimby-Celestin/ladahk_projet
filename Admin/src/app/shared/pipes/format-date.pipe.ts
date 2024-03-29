import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({ name: 'formatDate' })
export class FormatDatePipe implements PipeTransform {

  transform(value: string) {
    if (value) {
      return moment(value).format('DD/MM/YYYY');
    }
    return value;
  }

}
