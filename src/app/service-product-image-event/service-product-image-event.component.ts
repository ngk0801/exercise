import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-service-product-image-event',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './service-product-image-event.component.html',
  styleUrls: ['./service-product-image-event.component.css']
})
export class ServiceProductImageEventComponent {
  public products: any
  constructor(pservice: ProductService, private router: Router) {
    this.products = pservice.getProductsWithImages()
  }
  viewDetail(f: any) {
    this.router.navigate(['service-product-image-event', f.ProductId])
  }
}
