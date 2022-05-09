import { Pipe, PipeTransform } from '@angular/core';
/**
 * Truncate pipe
 * @example
 * {{ item.userFirstname | truncate: '1':'.' }}
 */
@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {
  /**
   * @param {string} value Value to transform
   * @param {number} limit Value limit to transform
   * @param {string} trail Char to replace truncated value
   */
  transform(value: string, limit: number = 50, trail: string = '...'): string {
    if (!value) { value = ''; }

    if (limit < 0) {
      limit *= -1;
      return value.length > limit ? trail + value.substring(value.length - limit, value.length) : value;
    } else {
      return value.length > limit ? value.substring(0, limit) + trail : value;
    }
  }
}
