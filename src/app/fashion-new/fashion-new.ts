import { Component } from '@angular/core';
import { FashionAPIService } from '../fashion-api.service';
import { Fashion } from '../models/Fashion';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fashion-new',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './fashion-new.html',
  styleUrls: ['./fashion-new.css']
})
export class FashionNew {
  fashion = new Fashion();
  errMessage: string = ''

  constructor(private _service: FashionAPIService, private router: Router) {
  }

  public setFashion(f: Fashion) {
    this.fashion = f
  }

  onFileSelected(event: any, fashion: Fashion) {
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      fashion.fashion_image = reader.result!.toString()
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  }

  postFashion() {
    this._service.postFashion(this.fashion).subscribe({
      next: (data) => {
        this.fashion = data;
        alert("Fashion created successfully!");
        this.router.navigate(['/fashion-detail', data._id]);
      },
      error: (err) => { this.errMessage = err }
    })
  }
}
