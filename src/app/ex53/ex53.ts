import { Component } from '@angular/core';
import { FashionAPIService } from '../fashion-api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ex53',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ex53.html',
  styleUrls: ['./ex53.css']
})
export class Ex53 {
  fashions: any;
  errMessage: string = ''

  constructor(public _service: FashionAPIService) {
    this._service.getFashions().subscribe({
      next: (data) => { this.fashions = data },
      error: (err) => { this.errMessage = err }
    })
  }
}
