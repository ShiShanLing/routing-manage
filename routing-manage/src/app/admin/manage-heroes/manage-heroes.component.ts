import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-manage-heroes',
  templateUrl: './manage-heroes.component.html',
  styleUrls: ['./manage-heroes.component.css']
})
export class ManageHeroesComponent implements OnInit {
  constructor(private route:ActivatedRoute) { }
  tempId:string|undefined = undefined;
  //
  ngOnInit(): void {
    this.route.params.subscribe( (value:any) => {
      this.tempId = value.id;
      console.log('value.id===',value);
    })
  }
  //

}
