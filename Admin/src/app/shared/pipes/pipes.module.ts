import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CapitalizePipe } from './capitalize.pipe';
import { ArrayToStringPipe } from './array2string.pipe';
import { TruncatePipe } from './truncate.pipe';
import { FormatDatePipe } from './format-date.pipe';
import { DoubleZeroPipe } from './double-zero.pipe';
@NgModule({
  imports: [CommonModule],
  declarations: [CapitalizePipe, ArrayToStringPipe, TruncatePipe, FormatDatePipe, DoubleZeroPipe],
  exports: [CapitalizePipe, ArrayToStringPipe, TruncatePipe, FormatDatePipe, DoubleZeroPipe]
})
export class PipesModule { }
