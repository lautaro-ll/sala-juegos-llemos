import { ActivatedRouteSnapshot, CanActivateFn, CanMatchFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AutenticacionService } from '../services/autenticacion.service';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';

// export const authGuard: CanMatchFn = (route, state) => {
//   const authService = inject(AutenticacionService);
//   return authService.isAuthenticated;
// };

export const AuthGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
):
  Observable<boolean | UrlTree> 
  | Promise<boolean | UrlTree> 
  | boolean 
  | UrlTree=> {
    
    if(inject(AutenticacionService).isLoggedIn()) {
      console.log('true')
      return true;
    }
    else {
      return inject(Router).navigateByUrl('login');
    }
  }    
