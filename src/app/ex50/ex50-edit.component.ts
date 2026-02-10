import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookAPIService } from '../book-api.service';
import { CommonModule } from '@angular/common';
import { FileUploadComponent } from '../file-upload/file-upload.component';

@Component({
    selector: 'app-ex50-edit',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, FileUploadComponent],
    templateUrl: './ex50-edit.component.html',
    styleUrls: ['./ex50.component.css']
})
export class Ex50EditComponent {
    bookForm: FormGroup;
    errMessage: string = '';
    bookId: string = '';

    constructor(private _service: BookAPIService, private router: Router, private activateRoute: ActivatedRoute) {
        this.bookForm = new FormGroup({
            BookId: new FormControl(''),
            BookName: new FormControl('', [Validators.required]),
            Price: new FormControl(0, [Validators.required, Validators.min(0)]),
            Description: new FormControl(''),
            Image: new FormControl(''),
            UpdateDate: new FormControl(''),
            Quantity: new FormControl(0, [Validators.min(0)]),
            TopicId: new FormControl(''),
            PublisherId: new FormControl('')
        });

        this.activateRoute.paramMap.subscribe(params => {
            let id = params.get('id');
            if (id != null) {
                this.bookId = id;
                this.loadBook(this.bookId);
            }
        });
    }

    loadBook(id: string) {
        this._service.getBook(id).subscribe({
            next: (data) => {
                this.bookForm.setValue({
                    BookId: data.BookId,
                    BookName: data.BookName,
                    Price: data.Price,
                    Description: data.Description,
                    Image: data.Image,
                    UpdateDate: data.UpdateDate,
                    Quantity: data.Quantity,
                    TopicId: data.TopicId,
                    PublisherId: data.PublisherId
                });
                this.bookForm.controls['BookId'].disable();
            },
            error: (err) => { this.errMessage = err }
        })
    }

    onFileUploaded(fileName: string) {
        this.bookForm.patchValue({ Image: fileName });
        this.bookForm.markAsDirty();
    }

    submitData() {
        if (this.bookForm.valid) {
            // Re-enable BookId to include it in the value, or merge it manually
            let bookData = this.bookForm.getRawValue();
            this._service.putBook(bookData).subscribe({
                next: (data) => { this.router.navigate(['/ex50']) },
                error: (err) => { this.errMessage = err }
            })
        }
    }
}
