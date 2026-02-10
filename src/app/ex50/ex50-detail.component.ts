import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { BookAPIService } from '../book-api.service';
import { CommonModule } from '@angular/common';
import { Book, IBook } from '../interfaces/Book';

@Component({
    selector: 'app-ex50-detail',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './ex50-detail.component.html',
    styleUrls: ['./ex50.component.css']
})
export class Ex50DetailComponent {
    book: IBook = new Book();
    errMessage: string = '';

    constructor(private _service: BookAPIService, private activateRoute: ActivatedRoute, private router: Router) {
        this.activateRoute.paramMap.subscribe(params => {
            let id = params.get('id');
            if (id != null) {
                this.loadBook(id);
            }
        });
    }

    loadBook(id: string) {
        this._service.getBook(id).subscribe({
            next: (data) => { this.book = data },
            error: (err) => { this.errMessage = err }
        })
    }

    getImageUrl(image: string): string {
        if (!image) return 'assets/book_images/default.jpg';
        const defaultImages = ['b1.jpg', 'b2.jpg', 'b3.jpg', 'b4.jpg', 'b5.jpg'];
        if (defaultImages.includes(image)) {
            return 'assets/book_images/' + image;
        } else {
            return 'http://127.0.0.1:3000/image/' + image;
        }
    }
}
