import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Important for standalone *ngFor
import { FakeProductService } from '../fake-product.service';

@Component({
    selector: 'app-ex26',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './ex26.component.html',
    styleUrls: ['./ex26.component.css']
})
export class Ex26Component {
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
