import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

import { OnInit } from '@angular/core';

@Component({
    selector: 'app-ex18',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './ex18.html',
    styleUrl: './ex18.css'
})
export class Ex18 implements OnInit {
    // Properties for loading state handling
    customers: any = [];
    loadError: string = '';
    isDataLoading: boolean = true;

    constructor(private http: HttpClient) { }

    ngOnInit() {
        this.http.get('/customers.json').subscribe({
            next: (data) => {
                this.customers = data;
                this.isDataLoading = false;
                console.log('Ex18 loaded data:', data);
            },
            error: (err) => {
                this.loadError = 'Failed to load data. Status: ' + err.status;
                this.isDataLoading = false;
                console.error('Ex18 failed to load data:', err);
            }
        });
    }
}
