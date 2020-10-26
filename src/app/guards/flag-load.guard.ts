import { Injectable } from '@angular/core';
import { CanLoad, Route, Router } from '@angular/router';
import { FeaturesFlagsService } from '../services/features-flags.service';

@Injectable({
  providedIn: 'root'
})
export class FlagLoadGuard implements CanLoad {
  constructor(private flagsService: FeaturesFlagsService, private router: Router) {}

  canLoad(route: Route): boolean  {
    return this.flagsService.hasFlags(route.data.flags);
  }
}
