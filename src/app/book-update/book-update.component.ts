import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BookAPIService } from '../book-api.service';
import { Book } from '../interfaces/Book';

@Component({
    selector: 'app-book-update',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './book-update.component.html',
    styleUrls: ['./book-update.component.css']
})
export class BookUpdateComponent {
    book = new Book();
    books: any
    errMessage: string = ''
    constructor(private _service: BookAPIService) {
        this._service.getBooks().subscribe({
            next: (data) => { this.books = data },
            error: (err) => { this.errMessage = err }
        })
    }
    putBook() {
        this._service.putBook(this.book).subscribe({
            next: (data) => { this.books = data },
            error: (err) => { this.errMessage = err }
        })
    }
}
