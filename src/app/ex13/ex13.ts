import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-ex13',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ex13.html',
  styleUrl: './ex13.css',
})
export class Ex13 {
  constructor(private pservice: ProductService, private router: Router) {
    this.products = pservice.getProductsWithImages();
  }

  products: any[] = [];

  viewDetail(p: any) {
    this.router.navigate(['service-product-image-event', p.ProductId]);
  }
}
