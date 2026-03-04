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
        // Nếu không có ảnh, dùng ảnh mặc định placeholder
        if (!image) return 'https://placehold.co/50x50?text=No+Image';
        const defaultImages = ['b1.jpg', 'b2.jpg', 'b3.jpg', 'b4.jpg', 'b5.jpg'];

        if (defaultImages.includes(image)) {
            return 'assets/book_images/' + image;
        } else {
            // Ảnh upload: bám sát tài liệu, lấy từ server (port 3000)
            return 'http://localhost:3000/image/' + image;
        }
    }

    handleImageError(event: any) {
        // Tránh infinite loop nếu bản thân ảnh placeholder cũng lỗi
        const fallbackUrl = 'https://placehold.co/50x50?text=No+Image';
        if (event.target.src !== fallbackUrl) {
            event.target.src = fallbackUrl;
        }
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
