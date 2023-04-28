import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { PRODUCTS } from './products-mock';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  getByFilter(query: string) {
    const products = PRODUCTS.filter(product => product.toLowerCase().includes(query.toLowerCase()))
    return of(products).pipe(delay(500));
  }
}
