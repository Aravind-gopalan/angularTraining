import { Component, OnInit } from '@angular/core';
import {Products} from '../Models/products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  searchText = '';
  products: Products[] = [
    {
      Id: 1,
      Name: 'Dell Inspiron 15 7000 Core i7 7th Gen',
      Desc: 'Whether it’s fast-paced racing or action-packed roleplay, the Dell Inspiron 15 laptop is designed to make your gaming experience truly delightful',
      Price: 37547,
      IsProductAvailable: true
    },
    {
      Id: 1,
      Name: 'Dell Vostro 15 3000 Series Core i3 7th Gen',
      Desc: "Whether it’s fast-paced racing or action-packed roleplay, the Dell Inspiron 15 laptop is designed to make your gaming experience truly delightful",
      Price: 34764,
      IsProductAvailable: true
    },
    {
      Id: 1,
      Name: 'Dell Inspiron 15 7000 Core i7 7th Gen',
      Desc: 'Whether it’s fast-paced racing or action-packed roleplay, the Dell Inspiron 15 laptop is designed to make your gaming experience truly delightful',
      Price: 386384,
      IsProductAvailable: false
    }
  ];

  constructor() { }

  ngOnInit() {
  }
  OnProdutCreated(e) {
    this.products.unshift(e);
  }

}
