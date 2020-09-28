import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from './auth.regsiter.service';
import { Injectable } from '@angular/core';
@Injectable()
export class AuthGaurdService implements CanActivate {

    constructor(private router: Router, private authService: AuthService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.authService.isUserLoggedIn())
        return true;
  
      this.router.navigate(['']);
      return false;

    }

}