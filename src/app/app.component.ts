import { Component, VERSION } from '@angular/core';
import { of, BehaviorSubject, concat } from 'rxjs';
import { delay, debounceTime, distinctUntilChanged, switchMap, map } from 'rxjs/operators';

import { ProductsService } from './products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'loading2';
  searchStream$ = new BehaviorSubject('');

  constructor(private productsService: ProductsService) {}

  obs$ = this.searchStream$.pipe(
    debounceTime(200),
    distinctUntilChanged(),
    switchMap((query) => 
      concat(
        of({ type: 'start'}),
        this.productsService.getByFilter(query).pipe(map(value => ({ type: 'finish', value })))
      ))
  );
}


