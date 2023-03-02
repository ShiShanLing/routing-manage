import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {ManageCrisesComponent} from "../manage-crises/manage-crises.component";

@Injectable({
  providedIn: 'root'
})
export class CanDeactivateGuard implements CanDeactivate<ManageCrisesComponent> {
  //这个类创建好 在 canDeactivate内部写好条件就能使用.
  canDeactivate(
    component: ManageCrisesComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return  component.dialogService.confirm('放弃更改并退出?');
  }

}
