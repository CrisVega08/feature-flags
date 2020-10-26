import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

import {FeaturesFlagsService} from '../services/features-flags.service'

@Injectable({
  providedIn: 'root'
})
export class FlagGuardGuard implements CanActivate {
  constructor(private flagsService: FeaturesFlagsService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.flagsService.hasFlags(route.data.flags)){
        return true;
      }
      return this.router.navigate['/'];
  }
}
