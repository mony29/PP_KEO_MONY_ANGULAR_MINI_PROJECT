import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/services/book.service';
import { IBook } from 'src/app/services/ibook';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {

  bookData: IBook[] = [];

  constructor(private _bookService: BookService, private router: Router) { }

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks() {
    this._bookService.getBooks().subscribe((e) => {
      console.log(e);
      this.bookData = e;
    })
  }

  deleteBook(id: number) {
    this._bookService.deleteBook(id).subscribe((e) => {
      console.log(e);
      this.getBooks();
    })
  }
}
