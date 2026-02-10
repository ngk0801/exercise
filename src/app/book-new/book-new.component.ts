import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BookAPIService } from '../book-api.service';
import { Book } from '../interfaces/Book';

@Component({
    selector: 'app-book-new',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './book-new.component.html',
    styleUrls: ['./book-new.component.css']
})
export class BookNewComponent {
    book = new Book();
    books: any
    errMessage: string = ''
    constructor(private _service: BookAPIService) {
        this._service.getBooks().subscribe({
            next: (data) => { this.books = data },
            error: (err) => { this.errMessage = err }
        })
    }
    postBook() {
        this._service.postBook(this.book).subscribe({
            next: (data) => { this.books = data },
            error: (err) => { this.errMessage = err }
        })
    }
}
