import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  constructor() { }
  confirm(message?: string): Observable<boolean> {
    console.log("DialogService-----进入到这里面来了");
    const confirmation = window.confirm(message || 'Is it OK?');
    return of(confirmation);
  }
}
