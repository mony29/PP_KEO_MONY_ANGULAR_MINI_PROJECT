import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { IBook } from 'src/app/services/ibook';
import { Location } from '@angular/common';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent {

  constructor(

    private _bookService: BookService,
    private httpClient: HttpClient,
    private location: Location) { }

  books: IBook[] = [];
  ngOnInit(): void {
    this.initForm()
  }

  private initForm(): void {
  }


  goBack(): void {
    this.location.back();
  }

}
