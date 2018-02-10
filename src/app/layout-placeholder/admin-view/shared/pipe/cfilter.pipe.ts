import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cfilter'
})
export class CfilterPipe implements PipeTransform {

  transform(items: any[], filter: string): any {
    // filter items array, items which match and return true will be kept, false will be filtered out
    if (filter === 'all') {
      return items;
    } else {
      return items.filter(item => item.category.indexOf(filter) !== -1);
    }
  }

}
