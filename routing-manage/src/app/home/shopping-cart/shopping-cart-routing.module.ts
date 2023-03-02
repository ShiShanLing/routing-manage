import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingCartComponent } from './shopping-cart.component';
import {OrderPayComponent} from "./order-pay/order-pay.component";
const routes: Routes = [
  { path: '',
    component: ShoppingCartComponent,
    title:()=>Promise.resolve("购物车"),
    children:[
      {
        path: 'orderPay',
        title:() => Promise.resolve("订单支付"),
        component: OrderPayComponent, // another child route component that the router renders
      },
    ]
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShoppingCartRoutingModule { }
