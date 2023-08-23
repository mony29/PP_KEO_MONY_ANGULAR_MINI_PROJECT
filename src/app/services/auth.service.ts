import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  logged : boolean = false;

  login(){
    this.logged = true;
  }

  logout(){
    this.logged = false;
  }

  IsAuthenticated(){
    return this.logged;
  }
}
