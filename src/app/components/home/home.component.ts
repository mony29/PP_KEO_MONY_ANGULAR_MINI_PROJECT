import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from 'src/app/services/book.service';
import { IBook } from 'src/app/services/ibook';
// import {MatInputModule} from '@angular/material/input';
// import {MatFormFieldModule} from '@angular/material/form-field';
// import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  // standalone: true,
  // imports: [FormsModule, MatFormFieldModule, MatInputModule],
})
export class HomeComponent {

  bookData: IBook[] = [];

  constructor(
    private _bookService: BookService,
    private router: Router
  ) { }

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

  getBookById(id: number) {
    this._bookService.getBookById(id).subscribe((e) => {
      for (let data of this.bookData) {
        if (data.id === id) {
          console.log('on home-component, id : ', id) // got id
          console.log(e)
          // this.router.navigate(['/book-details/id', id])
        }
      }
    }
    )
  }
}

    // this._bookService.getBookById(id).subscribe((e) => {
    //   console.log(e);
    // })