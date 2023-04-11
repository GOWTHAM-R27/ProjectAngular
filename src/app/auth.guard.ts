import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{

  constructor(private loginService: LoginService, private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

    if (!this.loginService.isUserLoggedIn())
    {
      alert("Login to view this page");
      this.router.navigate(["/login"], { queryParams: { retUrl: route.url } });
      return false;
    }
    return true;
  }


}
