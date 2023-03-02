import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {inject} from '@angular/core';
import {
  CanActivateFn, CanMatchFn,
  Router
} from '@angular/router'
import {AuthService} from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService:AuthService,
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log("authService.isLoggedIn");

    console.log("authService.isLoggedIn");
    if (this.authService.isLoggedIn) {
      return true;
    }
    // 都这重定向到登录页面.
    this.router.navigate(['/first']);
    alert("无权限")
    return false;

  }

}
