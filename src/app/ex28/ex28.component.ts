import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FAKE_BITCOIN_DATA } from '../data/fake_bitcoin_data';

@Component({
    selector: 'app-ex28',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './ex28.component.html',
    styleUrls: ['./ex28.component.css']
})
export class Ex28Component {
    bitcoinData: any = FAKE_BITCOIN_DATA;
    errMessage: string = '';

    constructor() {
        // Using local data
    }

    // Helper to get object keys for *ngFor iteration
    objectKeys(obj: any) {
        return obj ? Object.keys(obj) : [];
    }
}
