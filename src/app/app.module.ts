import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeaturesFlagsService } from './services/features-flags.service';

export const preloadFeature = (featuresService: FeaturesFlagsService) =>
  () => featuresService.getFeature().toPromise();

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      multi: true,
      useFactory: preloadFeature,
      deps: [FeaturesFlagsService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
