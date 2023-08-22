import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api'
import { Observable } from 'rxjs';
import { IBook } from './ibook';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    let books: IBook[] = [
      {
        id: 1,
        title: 'Spring Advance',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi sit repellendus sapiente debitis expedita, rerum quod nobis in nostrum, minus, ratione eveniet esse perspiciatis? Dignissimos iste fugit nihil. Delectus, voluptate.",
        bookImage: '../../assets/book1.png',
        author: 'Mony',
        category: 'Programming'
      },
      {
        id: 2,
        title: 'Angular Typescipt',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi sit repellendus sapiente debitis expedita, rerum quod nobis in nostrum, minus, ratione eveniet esse perspiciatis? Dignissimos iste fugit nihil. Delectus, voluptate.",
        bookImage: '../../assets/book2.png',
        author: 'Yuo',
        category: 'TypeScript',
      },
      {
        id: 3,
        title: 'JavaScript Library',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi sit repellendus sapiente debitis expedita, rerum quod nobis in nostrum, minus, ratione eveniet esse perspiciatis? Dignissimos iste fugit nihil. Delectus, voluptate.",
        bookImage: '../../assets/book3.png',
        author: 'Yuo',
        category: 'Library'
      },
      {
        id: 4,
        title: 'Java Programming Language',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi sit repellendus sapiente debitis expedita, rerum quod nobis in nostrum, minus, ratione eveniet esse perspiciatis? Dignissimos iste fugit nihil. Delectus, voluptate.",
        bookImage: '../../assets/book1.png',
        author: 'Mony',
        category: 'Programming'
      },
      {
        id: 5,
        title: 'TypeScript',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi sit repellendus sapiente debitis expedita, rerum quod nobis in nostrum, minus, ratione eveniet esse perspiciatis? Dignissimos iste fugit nihil. Delectus, voluptate.",
        bookImage: '../../assets/book2.png',
        author: 'Yuo',
        category: 'TypeScript'
      },
      // {
      //   id: 6,
      //   title: 'Angular',
      //   description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi sit repellendus sapiente debitis expedita, rerum quod nobis in nostrum, minus, ratione eveniet esse perspiciatis? Dignissimos iste fugit nihil. Delectus, voluptate.",
      //   bookImage: '../../assets/book3.png',
      //   author: 'Yuo',
      //   category: 'Programming'
      // }
    ]
    return { books };
  }
}
