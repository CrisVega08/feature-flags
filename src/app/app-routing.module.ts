import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/catalogue/catalogue.module').then(m => m.CatalogueModule)
  },
  {
    path: 'car',
    loadChildren: () => import('./pages/car/car.module').then(m => m.CarModule)
  },
  {
    path: 'new-feature',
    loadChildren: () => import('./pages/new-feature/new-feature.module').then(m => m.NewFeatureModule)
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
