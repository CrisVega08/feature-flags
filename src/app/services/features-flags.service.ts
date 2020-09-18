import { Injectable } from '@angular/core';
import { timer, Observable } from 'rxjs';
import {tap, mapTo} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FeaturesFlagsService {
  features = {};
  constructor() {}

  coerceArray(flags: string | string[]): Array<any> {
    if (typeof flags === 'string') {
      return [flags];
    }
    return flags;
  }
  hasFlags(flags: string | string[]): boolean {
    return this.coerceArray(flags).every(current => this.features[current]);
  }

  getFeature(): Observable<any> {
    const fake = {
      a: true,
      b: false,
      c: true,
      d: false
    };

    return timer(500).pipe(
      mapTo(fake),
      tap(feature => this.features = feature)
    );
  }
}
