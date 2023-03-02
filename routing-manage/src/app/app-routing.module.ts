import { NgModule } from '@angular/core';
import { RouterModule, Routes, ActivatedRoute, ParamMap } from '@angular/router';
import {SecondComponent} from "./second/second.component";
import {FirstComponent} from "./first/first.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'first',
    pathMatch: 'full'
  },
  {
    path:"first",
    title:() => Promise.resolve("First"),
    component:FirstComponent,
  },
  { path:"second", component:SecondComponent},
  {
    path:'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
  },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },

  { path: 'login', component:SecondComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
