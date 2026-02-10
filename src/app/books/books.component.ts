import { Component } from '@angular/core';
import { BookAPIService } from '../book-api.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-books',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './books.component.html',
    styleUrls: ['./books.component.css']
})
export class BooksComponent {
    books: any;
    errMessage: string = ''
    constructor(private _service: BookAPIService) {
        this.loadBooks();
    }

    loadBooks() {
        this.errMessage = '';
        this._service.getBooks().subscribe({
            next: (data) => {
                console.log("Books data received:", data);
                this.books = data;
            },
            error: (err) => {
                console.error("Books error:", err);
                this.errMessage = err;
            }
        })
    }

    retryLoad() {
        this.loadBooks();
    }
}
