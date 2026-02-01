import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { FAKE_PRODUCT_DATA } from './data/fake_data';

@Injectable({
    providedIn: 'root'
})
export class FakeProductService {

    constructor(private _http: HttpClient) { }

    getFakeProductData(): Observable<any> {
        // Returning hardcoded data as requested
        return of(FAKE_PRODUCT_DATA);
    }

    handleError(error: HttpErrorResponse) {
        return throwError(() => new Error(error.message));
    }
}
