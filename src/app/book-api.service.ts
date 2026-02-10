import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, retry, throwError, timeout } from 'rxjs';
import { IBook } from './interfaces/Book';

@Injectable({
    providedIn: 'root'
})
export class BookAPIService {
    constructor(private _http: HttpClient) { }

    getBooks(): Observable<any> {
        const headers = new HttpHeaders()
            .set('Cache-Control', 'no-cache')
            .set('Pragma', 'no-cache');
        return this._http.get<any>("http://127.0.0.1:3000/books?t=" + new Date().getTime(), { headers }).pipe(
            map(res => res as Array<IBook>),
            timeout(2000), // Timeout after 2 seconds
            retry(3),
            catchError(this.handleError))
    }

    getBook(id: string): Observable<any> {
        return this._http.get<any>("http://127.0.0.1:3000/books/" + id).pipe(
            map(res => res as IBook),
            retry(3),
            catchError(this.handleError))
    }

    postBook(book: IBook): Observable<any> {
        const headers = new HttpHeaders().set("Content-Type", "application/json;charset=utf-8")
        const requestOptions: Object = {
            headers: headers,
            responseType: "text"
        }
        return this._http.post<any>("http://127.0.0.1:3000/books", JSON.stringify(book), requestOptions).pipe(
            map(res => JSON.parse(res) as IBook),
            retry(3),
            catchError(this.handleError))
    }

    putBook(book: IBook): Observable<any> {
        const headers = new HttpHeaders().set("Content-Type", "application/json;charset=utf-8")
        const requestOptions: Object = {
            headers: headers,
            responseType: "text"
        }
        return this._http.put<any>("http://127.0.0.1:3000/books", JSON.stringify(book), requestOptions).pipe(
            map(res => JSON.parse(res) as IBook),
            retry(3),
            catchError(this.handleError))
    }

    deleteBook(id: string): Observable<any> {
        const headers = new HttpHeaders().set("Content-Type", "application/json;charset=utf-8")
        const requestOptions: Object = {
            headers: headers,
            responseType: "text"
        }
        return this._http.delete<any>("http://127.0.0.1:3000/books/" + id, requestOptions).pipe(
            map(res => JSON.parse(res) as any),
            retry(3),
            catchError(this.handleError))
    }

    handleError(error: HttpErrorResponse) {
        return throwError(() => new Error(error.message))
    }
}
