import { Component } from '@angular/core';
import { BookAPIService } from '../book-api.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-books',
    standalone: true,
    imports: [CommonModule, RouterModule],
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

    deleteBook(id: string) {
        if (confirm('Are you sure you want to delete this book?')) {
            this._service.deleteBook(id).subscribe({
                next: () => { this.loadBooks(); },
                error: (err) => { this.errMessage = err; }
            });
        }
    }
}
