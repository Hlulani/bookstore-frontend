
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
 
  private baseUrl = 'http://localhost:9080/api/books';

  constructor(private http: HttpClient) { }

  getBookById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/book/${id}`);
  }

  createBooks(book: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, book);
  }

  updateBooks(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/book/${id}`, value);
  }

  deleteBook(id: number): Observable<any> {
    console.log(id);
    return this.http.delete(`${this.baseUrl}/book/${id}`, { responseType: 'text' });
  }

  getAllBooks(): Observable<any> {
    console.log("reached");

    return this.http.get(`${this.baseUrl}`);
  }
}
