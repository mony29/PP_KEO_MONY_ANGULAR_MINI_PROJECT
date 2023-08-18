import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { BookService } from 'src/app/services/book.service';
import { IBook } from 'src/app/services/ibook';
import { Location } from '@angular/common'
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-new-book',
  templateUrl: './add-new-book.component.html',
  styleUrls: ['./add-new-book.component.css']
})
export class AddNewBookComponent implements OnInit {

  constructor(
    private formBuilder : FormBuilder,
    private _bookService: BookService,
    private httpClient : HttpClient,
    private router : Router,
    private location : Location) { }
  
  books : IBook[] = [];
  bookForm !: FormGroup;

  ngOnInit(): void {
    this.initForm()
  }
  
  private initForm() : void {
    this.bookForm = this.formBuilder.group({
      title : ['', Validators.required],
      description : ['', Validators.required],
      bookImage : ['', Validators.required],
      author : ['', Validators.required],
      category : ['', Validators.required]
    })
  }

  addBook() : void {
    let bookObject: IBook = this.bookForm.value;
    console.log("bookObject : ", bookObject) // working
    console.log("Init form : ", this.bookForm.value) // working
    this._bookService.addBook(bookObject).subscribe(
      res => {
        console.log("res", res) // working
        this.router.navigate(['/']) // use this to navigate home page, I've routerLink in html but it doesn't work.
      },
      error => {
        console.log(error)
      })
  }
  
  goBack() : void {
    this.location.back();
  }
}