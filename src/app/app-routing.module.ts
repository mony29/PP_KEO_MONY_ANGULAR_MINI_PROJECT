import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { BooksComponent } from './components/books/books.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AddNewBookComponent } from './components/add-new-book/add-new-book.component';

const routes: Routes = [
  {
    path: '',
    component: NavbarComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      { 
        path: 'books', 
        component: BooksComponent 
      },
      {
        path: 'login', 
        component: LoginComponent
      },
      
    ],
  },
  {
    path : 'addNewBook',  
    component: AddNewBookComponent
  },
  {
    path: 'error',
    component: NotFoundComponent,
  },
  {
    path: '**',
    redirectTo: 'error',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
