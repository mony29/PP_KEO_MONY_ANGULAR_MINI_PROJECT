import { Pipe, PipeTransform } from '@angular/core';
import { IBook } from '../services/ibook';

@Pipe({
  name: 'filterBookCategory'
})
export class FilterNamePipe implements PipeTransform {

  transform(value: IBook[], filterText: string) {
    if (value.length === 0 || filterText === '') {
      return value;
    }
    else {
      return value.filter((book) => {
        return book.category === filterText
      })
    }
  }
}
