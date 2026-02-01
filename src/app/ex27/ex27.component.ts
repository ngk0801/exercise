import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Important for standalone *ngFor
import { FakeProductService } from '../fake-product.service';

@Component({
    selector: 'app-ex27',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './ex27.component.html',
    styleUrls: ['./ex27.component.css']
})
export class Ex27Component {
    data: any;
    errMessage: string = '';

    constructor(_service: FakeProductService) {
        _service.getFakeProductData().subscribe({
            next: (data) => { this.data = data; },
            error: (err) => {
                this.errMessage = err;
            }
        });
    }
}
