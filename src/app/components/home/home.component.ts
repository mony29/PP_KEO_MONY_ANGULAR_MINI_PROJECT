import { Component, Inject, Input } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/services/book.service';
import { IBook } from 'src/app/services/ibook';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})


export class HomeComponent {

  bookData: IBook[] = [];
  bookForm !: FormGroup;

  constructor(
    private _bookService: BookService,
    private router: Router,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.getBooks();
    this.initForm();
  }

  private initForm(): void {
    this.bookForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      bookImage: ['', Validators.required],
      author: ['', Validators.required],
      category: ['', Validators.required]
    })
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

  updateBookDetails(id: number): void {
    this.bookForm.setValue({
      title: this.bookData[id].title,
      description: this.bookData[id].description,
      bookImage: this.bookData[id].bookImage,
      author: this.bookData[id].author,
      category: this.bookData[id].category
    })
  }

  // showContent: boolean = false;
  isModalOpen = false;
  openModal(id: number): void {
    this.isModalOpen = true;
    this.bookForm.setValue({
      title: this.bookData[id].title,
      description: this.bookData[id].description,
      bookImage: this.bookData[id].bookImage,
      author: this.bookData[id].author,
      category: this.bookData[id].category
    })
  }
  closeModal() {
    this.isModalOpen = false;
  }
}