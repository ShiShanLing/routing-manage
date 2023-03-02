import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import {ManageHeroesComponent} from "./manage-heroes/manage-heroes.component";
import {AdminDashboardComponent} from "./admin-dashboard/admin-dashboard.component";
import {ManageCrisesComponent} from "./manage-crises/manage-crises.component";
import {AuthGuard} from "./auth/auth.guard";

import {CanDeactivateGuard} from "./auth/can-deactivate.guard";

const routes: Routes = [
  { path: '',
    component: AdminComponent ,

    children: [
      {
        path: '',
        canActivate:[AuthGuard],
        children: [
          {
            path: 'crises',
            title:()=>Promise.resolve("crises"),
            component: ManageCrisesComponent,
            // canDeactivate:[canDeactivateGuard],
            canDeactivate:[CanDeactivateGuard],
          },
          {
            path: '',
            title:()=>Promise.resolve("Dashboard"),
            component: AdminDashboardComponent },
          {
            path: 'heroes/:id',
            title:()=>Promise.resolve("heroes"),
            component: ManageHeroesComponent,
          },

        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
