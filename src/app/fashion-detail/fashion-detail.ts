import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FashionAPIService } from '../fashion-api.service';
import { Fashion } from '../models/Fashion';

@Component({
  selector: 'app-fashion-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fashion-detail.html',
  styleUrls: ['./fashion-detail.css']
})
export class FashionDetail implements OnInit {
  fashion: Fashion | null = null;
  errMessage: string = '';

  constructor(
    private _service: FashionAPIService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.getFashion(id);
      }
    });
  }

  getFashion(id: string) {
    this._service.getFashion(id).subscribe({
      next: (data) => { this.fashion = data; },
      error: (err) => { this.errMessage = err; }
    });
  }

  goBack() {
    this.router.navigate(['/fashion-new']);
  }
}
