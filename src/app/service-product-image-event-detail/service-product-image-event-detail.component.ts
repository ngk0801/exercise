import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-service-product-image-event-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './service-product-image-event-detail.component.html',
  styleUrls: ['./service-product-image-event-detail.component.css']
})
export class ServiceProductImageEventDetailComponent {
  selectedProduct: any
  searchedId: string | null = null;

  constructor(private activateRoute: ActivatedRoute, private _fs: ProductService,
    private router: Router) {
    activateRoute.paramMap.subscribe(
      (param) => {
        this.searchedId = param.get('id');
        console.log("Detail Component - ID from route:", this.searchedId);
        if (this.searchedId != null) {
          this.selectedProduct = _fs.getProductDetail(this.searchedId)
          console.log("Detail Component - Found Product:", this.selectedProduct);
        }
      }
    )
  }

  goBack() {
    this.router.navigate(['service-product-image-event'])
  }
}
