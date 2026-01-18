import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export class CatalogService {
  datas = [
    {
      "Cateid": "cate1", "CateName": "nuoc ngot",
      "Products": [
        {
          "ProductId": "p1", "ProductName": "Coca", "Price": 100,
          "Image": "images/coca.jpg"
        },
        {
          "ProductId": "p2", "ProductName": "Pepsi", "Price": 300,
          "Image": "images/pepsi.jpg"
        },
        {
          "ProductId": "p3", "ProductName": "Sting", "Price": 200,
          "Image": "images/sting.jpg"
        },
      ]
    },
    {
      "Cateid": "cate2", "CateName": "Bia",
      "Products": [
        {
          "ProductId": "p4", "ProductName": "Heneiken", "Price": 500,
          "Image": "images/heniken.jpg"
        },
        {
          "ProductId": "p5", "ProductName": "333", "Price": 400,
          "Image": "images/333.jpg"
        },
        {
          "ProductId": "p6", "ProductName": "Sai Gon", "Price": 600,
          "Image": "images/saigon.jpg"
        },

      ]
    },
  ];
  constructor() { }
  getCategories() {
    return this.datas
  }
}

@Component({
  selector: 'app-ex14',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ex14.html',
  styleUrl: './ex14.css',
})
export class Ex14 {
  categories: any[] = [];

  constructor() {
    const catalogService = new CatalogService();
    this.categories = catalogService.getCategories();
  }
}
