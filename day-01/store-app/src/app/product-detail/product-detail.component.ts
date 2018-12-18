import { Component, OnInit, Input } from '@angular/core';
import { Products } from '../Models/products';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  @Input() product: Products  = new Products;
  constructor() { }

  ngOnInit() {
  }

  applyBadge() {
    return this.product.IsProductAvailable ? 'badge-success' : 'badge-danger';
  }

}
