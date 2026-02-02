import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-ex24',
    standalone: true,
    imports: [FormsModule, CommonModule],
    templateUrl: './ex24.component.html',
    styleUrls: ['./ex24.component.css']
})
export class Ex24Component {
    a: string = '';
    b: string = '';
    c: string = '';
    result: number | string = '';

    isNumber(val: string): boolean {
        return !isNaN(Number(val)) && val !== '';
    }

    calculate(type: string) {
        const numA = Number(this.a);
        const numB = Number(this.b);
        const numC = Number(this.c);

        if (!this.isNumber(this.a)) { this.result = 'Invalid input a'; return; }

        switch (type) {
            case 'max':
                if (!this.isNumber(this.b) || !this.isNumber(this.c)) { this.result = 'Invalid input'; return; }
                this.result = Math.max(numA, numB, numC);
                break;
            case 'min':
                if (!this.isNumber(this.b) || !this.isNumber(this.c)) { this.result = 'Invalid input'; return; }
                this.result = Math.min(numA, numB, numC);
                break;
            case 'sin':
                // Assuming input in degrees
                this.result = Math.sin(numA * Math.PI / 180);
                break;
            case 'cos':
                this.result = Math.cos(numA * Math.PI / 180);
                break;
            case 'pow':
                if (!this.isNumber(this.b)) { this.result = 'Invalid input b'; return; }
                this.result = Math.pow(numA, numB);
                break;
        }
    }
}
