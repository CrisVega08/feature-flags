import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogueComponent } from './catalogue.component';
import { CatalogueRoutingModule } from './catalogue-routing.module';
import { FeatureFlagModule } from '../../directives/feature-flag.module';

@NgModule({
  declarations: [CatalogueComponent],
  imports: [
    CommonModule,
    CatalogueRoutingModule,
    FeatureFlagModule
  ],
})
export class CatalogueModule { }
