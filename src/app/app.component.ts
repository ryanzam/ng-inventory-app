import { Component, EventEmitter } from '@angular/core';
import { Product } from './item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products: Product[];

  constructor(){
    this.products = [ new Product(
      'nice hat',
      'very nice hat',
      '/assets/hat.jpg',
      ['men', 'hat'],
      20),
      new Product(
      'NEATOJACKET',
      'Blue Jacket',
      '/assets/images/products/blue-jacket.jpg',
      ['Women', 'Apparel', 'Jackets & Vests'],
      238.99),
      new Product(
        'NICEHAT',
        'A Nice Black Hat',
        '/assets/images/products/black-hat.jpg',
        ['Men', 'Accessories', 'Hats'],
        29.99)
    ];
  }

  //when item selected
  productSelected(product: Product): void {
    console.log("item clicket", product);
  }
}
