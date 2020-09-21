import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './pages/about/about.component';
import { FlagGuardGuard } from './guards/flag-guard.guard';
import { FlagLoadGuard } from './guards/flag-load.guard';
import { PreloadingStrategy } from './helpers/preloading-strategy';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/catalogue/catalogue.module').then(m => m.CatalogueModule)
  },
  {
    path: 'about-new',
    component: AboutComponent,
    canActivate: [FlagGuardGuard],
    data: {
      flags: ['b']
    }
  },
  {
    path: 'car',
    loadChildren: () => import('./pages/car/car.module').then(m => m.CarModule),
    data: {
      flags: 'b'
    },
  },
  {
    path: 'new-feature',
    loadChildren: () => import('./pages/new-feature/new-feature.module').then(m => m.NewFeatureModule),
    data: {
      flags: 'newFeature'
    },
    canLoad: [FlagLoadGuard]
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadingStrategy })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
