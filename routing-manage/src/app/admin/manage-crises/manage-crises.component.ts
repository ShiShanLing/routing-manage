import { Component, OnInit } from '@angular/core';
import {DialogService} from "../dialog/dialog.service";
import {Observable} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-manage-crises',
  templateUrl: './manage-crises.component.html',
  styleUrls: ['./manage-crises.component.css']
})
export class ManageCrisesComponent implements OnInit {
  constructor(public dialogService:DialogService, private route:ActivatedRoute) { }
  tempId:number|undefined = undefined;
  ngOnInit(): void {
    this.route.queryParams.subscribe((value:any)=> {
      this.tempId = value.id;
      console.log("value.id==", value.id);
    })
  }


}
