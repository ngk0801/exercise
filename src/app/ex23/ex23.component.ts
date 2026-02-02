import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-ex23',
    standalone: true,
    imports: [ReactiveFormsModule, CommonModule],
    templateUrl: './ex23.component.html',
    styleUrls: ['./ex23.component.css']
})
export class Ex23Component {
    courseForm = new FormGroup({
        name: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.required, Validators.email]),
        phone: new FormControl(''),
        course: new FormControl('', Validators.required),
        time: new FormControl(''),
        agree: new FormControl(false, Validators.requiredTrue)
    });

    jsonOutput: string = '';
    isSubmitted: boolean = false;

    ngOnInit(): void {
        const saved = localStorage.getItem('courseData_23');
        if (saved) {
            this.courseForm.setValue(JSON.parse(saved));
        }
    }

    onSubmit() {
        this.isSubmitted = true;
        if (this.courseForm.valid) {
            this.jsonOutput = JSON.stringify(this.courseForm.value);
            localStorage.setItem('courseData_23', this.jsonOutput);
        } else {
            // Mark all as touched to trigger validation messages
            this.courseForm.markAllAsTouched();
            this.jsonOutput = '';
        }
    }

    onClear() {
        localStorage.removeItem('courseData_23');
        this.courseForm.reset();
        alert('Storage Cleared & Form Reset');
    }
}
