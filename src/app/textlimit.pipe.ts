import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textlimit',
  standalone: true
})
export class TextlimitPipe implements PipeTransform {

  transform(value: string, maxChars: number): any{
    if(value.length <= maxChars) return value;
    value.slice(0, maxChars) + '...';
  }

}
