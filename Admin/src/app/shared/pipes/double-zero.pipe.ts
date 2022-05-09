import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'zero' })
export class DoubleZeroPipe implements PipeTransform {

  transform(value: number) {
    if (!isNaN(value) && value < 10) {
      return '0' + value;
    }
    return value;
  }

}
