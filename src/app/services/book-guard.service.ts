import { Injectable } from '@angular/core';
import { CanActivate,ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class BookGuardService implements CanActivate{

  constructor(private _authService : AuthService, private router : Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if(this._authService.IsAuthenticated()){
      return true;
    }
    else{
      this.router.navigate(['/'])
      return false;
    }
  }
}
