import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    return {
      books: [
        {
          id: 1,
          title: 'Spring',
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi sit repellendus sapiente debitis expedita, rerum quod nobis in nostrum, minus, ratione eveniet esse perspiciatis? Dignissimos iste fugit nihil. Delectus, voluptate.",
          bookImage : '../../assets/book1.png',
          author: 'Mony',
          category: 'Programming'
        },
        {
          id: 2,
          title: 'Angular',
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi sit repellendus sapiente debitis expedita, rerum quod nobis in nostrum, minus, ratione eveniet esse perspiciatis? Dignissimos iste fugit nihil. Delectus, voluptate.",
          bookImage: '../../assets/book2.png',
          author: 'Yuo',
          category: 'Programming'
        },
        {
          id: 3,
          title: 'Angular',
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi sit repellendus sapiente debitis expedita, rerum quod nobis in nostrum, minus, ratione eveniet esse perspiciatis? Dignissimos iste fugit nihil. Delectus, voluptate.",
          bookImage: '../../assets/book3.png',
          author: 'Yuo',
          category: 'Programming'
        },
        {
          id: 1,
          title: 'Spring',
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi sit repellendus sapiente debitis expedita, rerum quod nobis in nostrum, minus, ratione eveniet esse perspiciatis? Dignissimos iste fugit nihil. Delectus, voluptate.",
          bookImage: '../../assets/book1.png',
          author: 'Mony',
          category: 'Programming'
        },
        {
          id: 2,
          title: 'Angular',
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi sit repellendus sapiente debitis expedita, rerum quod nobis in nostrum, minus, ratione eveniet esse perspiciatis? Dignissimos iste fugit nihil. Delectus, voluptate.",
          bookImage: '../../assets/book2.png',
          author: 'Yuo',
          category: 'Programming'
        },
        {
          id: 3,
          title: 'Angular',
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi sit repellendus sapiente debitis expedita, rerum quod nobis in nostrum, minus, ratione eveniet esse perspiciatis? Dignissimos iste fugit nihil. Delectus, voluptate.",
          bookImage: '../../assets/book3.png',
          author: 'Yuo',
          category: 'Programming'
        }
      ],
    }

  }
}
