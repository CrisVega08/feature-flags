import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import {FeaturesFlagsService} from '../services/features-flags.service'

@Injectable({
  providedIn: 'root'
})
export class FlagGuardGuard implements CanActivate {
  constructor(private flagsService: FeaturesFlagsService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.flagsService.hasFlags(route.data.flags);
  }
}
