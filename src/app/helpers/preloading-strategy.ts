import { Injectable } from '@angular/core';
import { Route} from '@angular/router';
import { Observable, of } from 'rxjs';

import { FeaturesFlagsService } from '../services/features-flags.service';

@Injectable({ providedIn: 'root' })
export class PreloadingStrategy implements PreloadingStrategy {
  constructor(private flagServices: FeaturesFlagsService) {
  }

  preload(route: Route, load: () => Observable<any>): Observable<any> {
    return this.flagServices.hasFlags(route.data.flags) ? load() : of(false);
  }
}
