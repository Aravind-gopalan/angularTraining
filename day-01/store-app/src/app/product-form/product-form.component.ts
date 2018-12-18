import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Products } from '../Models/products';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  showMessage = false;
  product: Products = new Products;
  @Output() productCreated = new EventEmitter<Products>();
  constructor() { }

  ngOnInit() {
  }

  SubmitProduct() {
    this.productCreated.emit(this.product);
   // this.products.unshift(this.product);
   this.product = new Products;
  this.showMessage = true;
  }



}
