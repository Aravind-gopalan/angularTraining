import { Pipe, PipeTransform } from '@angular/core';
import { Products } from '../Models/products';

@Pipe({
  name: 'searchProducts'
})
export class SearchProductsPipe implements PipeTransform {

  transform(products: Products[], searchText: string, fieldName: string): any {
    if (searchText === '') {
      return products;
    }
    const filteredProducts = products.filter(product => product[fieldName].Name.toLowerCase().indexOf(searchText.toLowerCase()) >= 0);
    return filteredProducts;
  }
}
