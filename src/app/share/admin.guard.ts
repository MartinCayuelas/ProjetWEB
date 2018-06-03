import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';


@Injectable()

export class AdminGuard implements CanActivate {
  constructor(
    private userService: UserService,
    private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {

    return this.userService.getRole().pipe(
      map(role => {
        if (role.role === 0) {
          return false;
        }
        return true;
      }));
  }
}



