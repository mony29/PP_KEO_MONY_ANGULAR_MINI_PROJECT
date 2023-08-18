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

  constructor(
    private _bookService: BookService,
    private router: Router,
    private formBuilder : FormBuilder,
  ) { }

  ngOnInit(): void {
    this.getBooks();
    this.initForm();
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



  bookForm !: FormGroup;

 
  private initForm() : void {
    this.bookForm = this.formBuilder.group({
      title : ['', Validators.required],
      description : ['', Validators.required],
      bookImage : ['', Validators.required],
      author : ['', Validators.required],
      category : ['', Validators.required]
    })
  }

  // addBook() : void {
  //   let bookObject: IBook = this.bookForm.value;
  //   console.log("bookObject : ", bookObject) // working
  //   console.log("Init form : ", this.bookForm.value) // working
  //   this._bookService.addBook(bookObject).subscribe(
  //     res => {
  //       console.log("res", res) // working
  //       this.router.navigate(['/']) // use this to navigate home page, I've routerLink in html but it doesn't work.
  //     },
  //     error => {
  //       console.log(error)
  //     })
  // }
  
  updateBookDetails(id: number) {
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
    let bookObject: IBook = this.bookForm.value;
    console.log("bookObject : ", bookObject)
   
  }

  // putCategory(categoryId: number, categoryName: any): Observable<any> {
  //   return this._httpClient.put(
  //   `http://localhost:8888/api/v1/categories/update-category-by-id/${categoryId}/users`,
  //   categoryName
  //   );}}
    


  // showContent: boolean = false;


  isModalOpen = false;

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

}