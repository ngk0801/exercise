import { Component } from '@angular/core';
import { BookAPIService } from '../book-api.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-book-detail',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './book-detail.component.html',
    styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent {
    book: any;
    errMessage: string = ''
    constructor(private _service: BookAPIService) {
    }
    searchBook(bookId: string) {
        this._service.getBook(bookId).subscribe({
            next: (data) => { this.book = data },
            error: (err) => { this.errMessage = err }
        })
    }
}
