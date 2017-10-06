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
      'Hi-Tech IPAD',
      'very handy, cheap and great ipad',
      '/assets/images/ipad.png',
      ['technology', 'ipad'],
      189),
      new Product(
      'LAPTOP',
      'Octa-Core Laptop',
      '/assets/images/laptop.png',
      ['laptop', 'latest model', 'durable'],
      699.99),
      new Product(
        'PHONE',
        'Recently released, new technologies',
        '/assets/images/phone.png',
        ['Phone', 'super-fast', 'high-resolution camera', '32gb ram'],
        499)
    ];
  }

  //when item selected
  productSelected(product: Product): void {
    console.log("item clicket", product);
  }
}
