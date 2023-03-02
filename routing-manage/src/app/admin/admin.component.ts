import { Component, OnInit } from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {from} from "rxjs";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit{
  observable = new Observable((subscriber)=>{
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
    setTimeout(()=>{
      subscriber.next(4);
      subscriber.complete();
    }, 1000);
  });

  observble_from = from([11, 12, 13, 14]);
  subscription: Subscription|undefined;
  constructor() {

  }
  ngOnInit() {
    console.log('just before subscribe');
    this.observable.subscribe({
      next(x){
        console.log('got value ' + x);
      },
      error(err) {
        console.error('something wrong occurred: ' + err);
      },
      complete() {
        console.log('done');
      },

    })
    console.log('just after subscribe');


    this.subscription = this.observble_from.subscribe((x)=>{
      console.log(x);
    })
    //取消
    this.subscription.unsubscribe();

  }



}

//当我们使用 create() 创建 Observable 时，每个 Observable 都必须定义如何处理该执行的资源。你可以通过从 function subscribe() 中返回自定义 unsubscribe 函数来做到这一点。
