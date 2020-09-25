import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  user$: any;

  constructor(private auth: AuthGuardService, private router: Router) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
    boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
      throw new Error('Method not implemented.');
      // this.auth.user$.map((user: any) => {
      //   if (user) return true;
      //   this.router.navigate(['/login']);
      //   return false;
      // });
      
    }
}
