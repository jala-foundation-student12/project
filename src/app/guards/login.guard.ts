import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanLoad, CanActivate, RouterStateSnapshot, UrlTree, Router, UrlSegment, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate{

  constructor(private userService: UserService, private router:Router){

  }
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    return this.userService.validateToken().pipe(
      tap(isLogged => {
        if(!isLogged){
          console.log(isLogged);
          this.router.navigateByUrl('/home');
        }
      })
    )
    // return true;
  }
  
} //snippet de esto
