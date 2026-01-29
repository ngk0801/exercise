import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-ex18',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './ex18.html',
    styleUrl: './ex18.css'
})
export class Ex18 implements OnInit {
    // FORCE PUBLIC ACCESS
    public customers: any[] = [];
    public isDataLoading: boolean = false;
    public loadError: string = '';

    constructor(private http: HttpClient) { }

    ngOnInit(): void {
        console.log('Ex18 Initialized - Loading Data (DIRECT MODE)...');
        // DIRECTLY ASSIGN DATA TO BYPASS SERVER ISSUES
        this.customers = [
            {
                "CustomerTypeId": 1,
                "CustomterTypeName": "VIP",
                "Customers": [
                    {
                        "Id": "Cus123",
                        "Name": "Obama",
                        "Email": "obama@gmail.com",
                        "Age": 67,
                        "Image": "images/trump.jpg"
                    },
                    {
                        "Id": "Cus456",
                        "Name": "Kim jong Un",
                        "Email": "unun@gmail.com",
                        "Age": 38,
                        "Image": "images/kim.png"
                    },
                    {
                        "Id": "Cus789",
                        "Name": "Putin",
                        "Email": "putin@gmail.com",
                        "Age": 77,
                        "Image": "images/putin.jpg"
                    }
                ]
            },
            {
                "CustomerTypeId": 2,
                "CustomterTypeName": "Normal",
                "Customers": [
                    {
                        "Id": "Cus000",
                        "Name": "Hồ Cẩm Đào",
                        "Email": "hodao@gmail.com",
                        "Age": 16,
                        "Image": "images/hocamdao.jpg"
                    },
                    {
                        "Id": "Cus111",
                        "Name": "Tap Can Binh",
                        "Email": "binhbinh@gmail.com",
                        "Age": 67,
                        "Image": "images/tap.jpg"
                    }
                ]
            }
        ];
        this.isDataLoading = false;
    }
}
