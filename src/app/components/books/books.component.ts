import { Component, Pipe, PipeTransform } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from 'src/app/services/book.service';
import { IBook } from 'src/app/services/ibook';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {


  // reactive form
  reactiveForm!: FormGroup;
  bookData: IBook[] = [];
  // new
  filterText: string = '';
  // filteredCategory: IBook[] = [];

  // get filterText() {
  //   return this._filterText;
  // }

  // set filterText(value: string) {
  //   this._filterText = value;
  //   this.filteredCategory = this.filterBookByCategory(value);
  //   console.log("Hello", this.filteredCategory)
  // }

  constructor(private _bookService: BookService, private router: Router) {
    // Listen for changes in filteredCategory property
    // this.filteredCategoryChanges();
    // console.log("nice", this.filteredCategory)
  }


  // Debugging method to listen for changes in filteredCategory
  // filteredCategoryChanges() {
  //   console.log("Initial filteredCategory value:", this.filteredCategory);

    // Listen for changes
    // setInterval(() => {
    //   console.log("Filtered category:", this.filteredCategory);
    // }, 1000); // Log every second
  // }


  ngOnInit(): void {
    this.getBooks();
    this.reactiveForm = new FormGroup(
      {
        search: new FormControl(null)
      })
  
  }

  getBooks() {
    this._bookService.getBooks().subscribe((e) => {
      // console.log(e);
      this.bookData = e;
    })
  }

  deleteBook(id: number) {
    this._bookService.deleteBook(id).subscribe((e) => {
      console.log(e);
      this.getBooks();
    })
  }

  // filterBookByCategory(filterTerm: string) {
  //   if (this.filteredCategory.length === 0 || this.filterText === '') {
  //     console.log("Hiiiiiiiiiiii")
  //     return this.filteredCategory;
  //   }
  //   else {
  //     return this.filteredCategory.filter((filteredCategory) => {
  //       console.log("okkkkk")
  //       return filteredCategory.category === filterTerm
  //     })
  //   }
  // }
}
