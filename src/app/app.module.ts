import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BooksComponent } from './components/books/books.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataService } from './services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { AddNewBookComponent } from './components/add-new-book/add-new-book.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CategoryFilterPipe } from './pipes/category-filter.pipe';
import { FilterNamePipe } from './pipes/filter-name.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BooksComponent,
    LoginComponent,
    NavbarComponent,
    NotFoundComponent,
    AddNewBookComponent,
    BookDetailsComponent,
    CategoryFilterPipe,
    FilterNamePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientInMemoryWebApiModule.forRoot(DataService),
    HttpClientModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
