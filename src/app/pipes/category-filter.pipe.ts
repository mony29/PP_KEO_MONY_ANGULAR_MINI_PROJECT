import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoryFilter'
})
export class CategoryFilterPipe implements PipeTransform {

  transform(value: string, length: number) {
    if(value.length > length){
      return value.substring(0, length) + '...';
    }
    return value;
    // return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()
  }

}
