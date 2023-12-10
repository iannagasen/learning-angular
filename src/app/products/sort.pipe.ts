import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product';

@Pipe({
  name: 'sort',
  standalone: true
})
export class SortPipe implements PipeTransform {

  transform(value: Product[]): Product[] {
    return (!value)
      ? []
      : value.sort(this.productSorter)
  }

  private productSorter(a: Product, b: Product): number {
    if (a.name < b.name) return -1;
    else if (a.name > b.name) return 1;
    else return 0;
  }
}