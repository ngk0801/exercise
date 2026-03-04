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
        // Nếu không có ảnh, dùng ảnh mặc định trực tuyến
        if (!image) return 'https://placehold.co/200x200?text=No+Image';
        const defaultImages = ['b1.jpg', 'b2.jpg', 'b3.jpg', 'b4.jpg', 'b5.jpg'];
        if (defaultImages.includes(image)) {
            return 'assets/book_images/' + image;
        } else {
            // Ảnh upload: dùng server my-server (3000)
            return 'http://localhost:3000/image/' + image;
        }
    }
}
