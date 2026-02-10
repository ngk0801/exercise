import { Component, ChangeDetectorRef } from '@angular/core';
import { BookAPIService } from '../book-api.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-ex50',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './ex50.component.html',
    styleUrls: ['./ex50.component.css']
})
export class Ex50Component {
    books: any;
    errMessage: string = ''
    constructor(private _service: BookAPIService, private cdr: ChangeDetectorRef) {

    }

    ngOnInit() {
        // Small delay to ensure view is ready and connection is free
        setTimeout(() => {
            this.loadBooks();
        }, 500);
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

    handleImageError(event: any) {
        event.target.src = 'assets/book_images/default.jpg';
    }

    loadBooks() {
        console.log("Ex50: Loading books...");
        this._service.getBooks().subscribe({
            next: (data) => {
                console.log("Ex50: Books loaded:", data);
                this.books = data;
                if (!data || data.length === 0) {
                    this.errMessage = "No books found.";
                }
                this.cdr.detectChanges(); // Force update
            },
            error: (err) => {
                console.error("Ex50: Error loading books:", err);
                this.errMessage = err.message || JSON.stringify(err);
                this.cdr.detectChanges(); // Force update
            }
        })
    }

    deleteBook(id: string) {
        if (confirm("Are you sure you want to delete this book?")) {
            this._service.deleteBook(id).subscribe({
                next: (data) => { this.loadBooks() },
                error: (err) => { this.errMessage = err }
            })
        }
    }
}
