import { Component } from '@angular/core';
import { BookAPIService } from '../book-api.service';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FileUploadComponent } from '../file-upload/file-upload.component';

@Component({
    selector: 'app-ex50-add',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, FileUploadComponent],
    templateUrl: './ex50-add.component.html',
    styleUrls: ['./ex50.component.css'] // reuse styles
})
export class Ex50AddComponent {
    bookForm: FormGroup;
    errMessage: string = '';

    constructor(private _service: BookAPIService, private router: Router) {
        this.bookForm = new FormGroup({
            BookId: new FormControl('', [Validators.required]),
            BookName: new FormControl('', [Validators.required]),
            Price: new FormControl(0, [Validators.required, Validators.min(0)]),
            Description: new FormControl(''),
            Image: new FormControl(''),
            UpdateDate: new FormControl(''),
            Quantity: new FormControl(0, [Validators.min(0)]),
            TopicId: new FormControl(''),
            PublisherId: new FormControl('')
        });
    }

    onFileUploaded(fileName: string) {
        this.bookForm.patchValue({ Image: fileName });
    }

    submitData() {
        console.log("Submit button clicked");
        console.log("Form Valid:", this.bookForm.valid);
        console.log("Form Value:", this.bookForm.value);

        if (this.bookForm.valid) {
            this._service.postBook(this.bookForm.value).subscribe({
                next: (data) => {
                    console.log("Post success:", data);
                    this.router.navigate(['/ex50'])
                },
                error: (err) => {
                    console.error("Post error:", err);
                    this.errMessage = err
                }
            })
        } else {
            this.errMessage = "Form is invalid: " + JSON.stringify(this.bookForm.errors);
        }
    }
}
