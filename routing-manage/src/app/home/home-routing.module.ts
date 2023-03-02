import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import {DetailsComponent} from "./details/details.component";





const routes: Routes = [
  {
    path: '',
    title:()=>Promise.resolve("首页"),
    component: HomeComponent,
    children:[
      {
        path: 'details', // child route path
        title:() => Promise.resolve("详情"),
        component: DetailsComponent, // child route component that the router renders
      },
      { path: 'ShoppingCart',
        loadChildren: () => import('./shopping-cart/shopping-cart.module').then(m => m.ShoppingCartModule)
      },
    ],
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
