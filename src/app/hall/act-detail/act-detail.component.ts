import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Activity, ActivityService } from '../../activitycenter/activities.service';
import { OrderService,OrderPost,Advice } from "../../order.service";
import { User, UserService } from '../../user.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,

} from '@angular/animations';
@Component({
  selector: 'app-act-detail',
  templateUrl: './act-detail.component.html',
  styleUrls: ['./act-detail.component.css'],
  providers:[ActivityService],
  animations:[
    trigger('comment', [
      state('show', style({transform:'scale(1)'})),
      state('hide',style({transform:'scale(0)','height':'0'})),
      transition('show <=> hide', animate('500ms ease-in')),
      ])
    ]
})
export class ActDetailComponent implements OnInit {
  actDetail:Activity=new Activity(1,'',1,1,'','',[''],[''],'',1,1,1,'');
  activityDetail$:Observable<Activity>;
  id:number;

  comment:string='hide'
  advice:Advice=new Advice('','','');

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
      this.orderService.adress=result.address
      this.orderService.start_time=result.start_time
      })
  }

  show(){
    this.comment='show'
  }
  hide(){
    this.comment='hide'

    this.advice.mating=this.actDetail.title
    this.advice.openid=this.userService.user.openid
    this.orderService.addAdvice(this.advice).subscribe()
  }

}
