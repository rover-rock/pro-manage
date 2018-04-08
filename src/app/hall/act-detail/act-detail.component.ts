import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Activity, ActivityService } from '../../activitycenter/activities.service';
import { OrderService,OrderPost } from "../../order.service";
import { User, UserService } from '../../user.service';
@Component({
  selector: 'app-act-detail',
  templateUrl: './act-detail.component.html',
  styleUrls: ['./act-detail.component.css'],
  providers:[ActivityService]
})
export class ActDetailComponent implements OnInit {
  actDetail:Activity=new Activity(1,'',1,1,'','',[''],[''],'',1,1,1);
  activityDetail$:Observable<Activity>;
  id:number;
  constructor(private route: ActivatedRoute,
    private service: ActivityService,
    private orderService:OrderService,
    private userService:UserService) { }

  ngOnInit() {
    let user=this.userService.getUser();
    this.id =Number(this.route.snapshot.paramMap.get('id'));

    this.activityDetail$=this.route.paramMap.pipe(
      switchMap((params:ParamMap)=>
      this.service.getActivity(params.get('id') ))
      );

      this.activityDetail$.subscribe(result=>{
      this.actDetail=result;
      this.orderService.setOrder(new OrderPost(this.id,user.openid,0,result.title,result.price))
      })
  }

}
