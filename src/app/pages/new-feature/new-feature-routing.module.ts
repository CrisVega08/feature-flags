import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewFeatureComponent } from './new-feature.component'

const routes: Routes = [
  {
    path: '',
    component: NewFeatureComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewFeatureRoutingModule { }
