import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { IBook } from 'src/app/services/ibook';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  constructor(
    private _bookService: BookService,
    private httpClient: HttpClient,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private location: Location) { }

  books: IBook[] = [];
  bookId: number | undefined;
  tempBook !: IBook;

  ngOnInit(): void {
    this._bookService.getBooks().subscribe(
      books => {
        this.books = books;
        this.getBookIdFromUrl();
      },
      err => {
        console.log(err)
      })
  }

  getBookIdFromUrl() {
    this.bookId = +this.activeRoute.snapshot.paramMap.get('id')!;

    for (let book in this.books) {

      if (this.books[book].id === this.bookId) {

        this.tempBook = this.books[book];

      }
    }
    // console.log('on book-detail component, id : ',this.bookId)
  }
 


  goBack(): void {
    this.location.back();
  }
}
