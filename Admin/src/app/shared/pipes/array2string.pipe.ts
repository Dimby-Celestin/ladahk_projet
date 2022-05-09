import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'arrayToString' })
export class ArrayToStringPipe implements PipeTransform {

  transform(value: any[]): string {
    if (value.length > 0) {
      return value.join(' - ');
    }
    return '';
  }

}
