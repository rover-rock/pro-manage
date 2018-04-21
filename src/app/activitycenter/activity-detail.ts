import { Component,OnInit,Input} from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Activity, ActivityService,Comment } from './activities.service';
import { UserService } from '../user.service';

import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,

} from '@angular/animations';
@Component({
  selector: 'activity-detail',
  templateUrl: './activity-detail.html',
  styleUrls: ['./activity-detail.css'],
  animations:[
    trigger('comment', [
      state('show', style({transform:'scale(1)'})),
      state('hide',style({transform:'scale(0)','height':'0'})),
      transition('show <=> hide', animate('500ms ease-in')),
      ])
    ]

})
export class ActivityDetailComponent implements OnInit {


    activityDetail:Activity ;
    num:number;
    comments:Comment[]=new Array(8);
    comment:Comment=new Comment(1,'','','','');
    state:string='hide'
    constructor(
      private route: ActivatedRoute,
      private router: Router,
      private service: ActivityService,
      private userService:UserService
    ) {}
    ngOnInit():void{
     this.route.data.subscribe((data:{activity:Activity})=>{
          this.activityDetail=data.activity
          this.num=(Number(this.activityDetail.girls)+Number(this.activityDetail.gentlemen));

      })

        // this.service.getComments(this.route.snapshot.paramMap.get('id')).subscribe(result=>{
        //   this.comments=result
        // })


        var detailSwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal',
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        },
        dynamicBullets:true,
        longSwipesRatio: 0.3,
        touchRatio:1,
        observer:true,//修改swiper自己或子元素时，自动初始化swiper
        observeParents:true,//修改swiper的父元素时，自动初始化swiper
        autoplay:2000,
        fadeEffect:true,


      })
    }

     addComment(){
        this.state='hide'
         this.comment.openid=this.userService.user.openid
        this.comment.nickname=this.userService.user.nickname
        this.comment.title=this.activityDetail.title
        this.comment.matingid=this.activityDetail.id
        this.service.addComment(this.comment).subscribe()
     }
}
