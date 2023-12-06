import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {

  constructor(
    private router: Router,
    private loginService: LoginService) { }

  canActivate(): boolean {
    if (this.loginService.getToken()) {
      return true;
    } else {
      this.router.navigate([''])
      return false;
    }

  }

}

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  return inject(AuthGuard).canActivate();
}