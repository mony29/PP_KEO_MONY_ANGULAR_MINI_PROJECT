import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBook } from './ibook';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private _httpClient : HttpClient) { }

  BASE_URL = 'api/books';

  getBooks() : Observable<IBook[]> {
    return this._httpClient.get<IBook[]>(this.BASE_URL);
  }

  deleteBook(id : any) : Observable<IBook> {
    return this._httpClient.delete<IBook>(`${this.BASE_URL}/${id}`);
  }

  addBook(book : IBook) : Observable<IBook> {
    return this._httpClient.post<IBook>(this.BASE_URL, book);
  }

  getBookById(id : any) : Observable<IBook> {
    return this._httpClient.get<IBook>(`${this.BASE_URL}/${id}`);
  }

  updateBook(book : IBook) : Observable<IBook> {
    return this._httpClient.put<IBook>(`${this.BASE_URL}/${book.id}`, book);
  }
}
