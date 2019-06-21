import { Pipe, PipeTransform } from '@angular/core';

import { distanceInWordsToNow } from 'date-fns';

@Pipe({
  name: 'customDate',
})
export class CustomDatePipe implements PipeTransform {
  transform(value: any, addSuffix = true): any {
    return distanceInWordsToNow(value, { addSuffix });
  }
}
