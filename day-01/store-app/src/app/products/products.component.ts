import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productName = 'Dell Inspiron';
  productPrice = 123;
  constructor() { }

  ngOnInit() {
  }
  Save() {
    console.log('button clicked');
  }
  onChange(e) {
    console.log(e.target.value);
  }

}
