import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { finalize, Subscription } from 'rxjs';

@Component({
    selector: 'app-file-upload',
    standalone: true,
    imports: [CommonModule],
    template: `
    <input type="file" (change)="onFileSelected($event)" #fileUpload>
    <!-- <button (click)="fileUpload.click()">Select File</button> -->
    <div *ngIf="uploadProgress > 0 && uploadProgress < 100">
        Upload Progress: {{uploadProgress}}%
    </div>
    <div *ngIf="fileName">
        Uploaded: <strong>{{fileName}}</strong>
    </div>
    `,
    styles: []
})
export class FileUploadComponent {
    @Output() onUploadFinished = new EventEmitter<string>();
    fileName = '';
    uploadProgress: number = 0;
    uploadSub: Subscription | null = null;

    constructor(private http: HttpClient) { }

    onFileSelected(event: any) {
        const file: File = event.target.files[0];
        if (file) {
            this.fileName = file.name;
            const formData = new FormData();
            formData.append("image", file);

            // Use absolute URL to avoid proxy issues
            const upload$ = this.http.post<any>("http://localhost:3000/upload", formData, {
                reportProgress: true,
                observe: 'events'
            }).pipe(
                finalize(() => this.reset())
            );

            this.uploadSub = upload$.subscribe({
                next: (event: any) => {
                    if (event.type === HttpEventType.UploadProgress) {
                        this.uploadProgress = Math.round(100 * (event.loaded / event.total!));
                    } else if (event.type === HttpEventType.Response) {
                        // Upload success
                        this.onUploadFinished.emit(event.body.fileName);
                    }
                },
                error: (err: any) => {
                    console.error("Upload failed", err);
                    alert("Upload failed. Ensure server is running.");
                }
            });
        }
    }

    reset() {
        this.uploadProgress = 0;
        this.uploadSub = null;
    }
}
