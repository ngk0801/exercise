import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-ex22',
    standalone: true,
    imports: [ReactiveFormsModule, CommonModule],
    templateUrl: './ex22.component.html',
    styleUrls: ['./ex22.component.css']
})
export class Ex22Component {
    courseForm = new FormGroup({
        name: new FormControl(''),
        email: new FormControl(''),
        phone: new FormControl(''),
        course: new FormControl(''),
        time: new FormControl(''),
        agree: new FormControl(false)
    });

    jsonOutput: string = '';

    ngOnInit(): void {
        const saved = localStorage.getItem('courseData_22');
        if (saved) {
            this.courseForm.setValue(JSON.parse(saved));
        }
    }

    onSubmit() {
        this.jsonOutput = JSON.stringify(this.courseForm.value);
        localStorage.setItem('courseData_22', this.jsonOutput);
    }

    onClear() {
        localStorage.removeItem('courseData_22');
        this.courseForm.reset();
        this.jsonOutput = '';
    }
}
