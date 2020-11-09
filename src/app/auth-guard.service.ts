import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';



@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private auth: AuthService, private router: Router) { }
    
  canActivate(router, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> 
    {
      return this.auth.user$.map(user => {
        if (user) return true;

        this.router.navigate(['/login'], {queryParams: { returnUrl: state.url } } );
        return false;
      });
    }
      
    
}


