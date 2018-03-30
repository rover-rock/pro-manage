import { Component,OnInit,Input} from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Activity, ActivityService } from './activities.service';

@Component({
  selector: 'activity-detail',
  templateUrl: './activity-detail.html',
  styleUrls: ['./activity-detail.css'],

})
export class ActivityDetailComponent implements OnInit {



    activityDetail$:Observable<Activity>;
    activityDetail:Activity ;
    num:number;
    comments:string[]=['','','','','',''];

    constructor(
      private route: ActivatedRoute,
      private router: Router,
      private service: ActivityService
    ) {}
    ngOnInit():void{

      this.activityDetail$=this.route.paramMap.pipe(
        switchMap((params:ParamMap)=>
        this.service.getActivity(params.get('id') ))
        );
        this.activityDetail$.subscribe(result=>{
        this.activityDetail=result;
        console.log(result)
        this.num=(Number(this.activityDetail.girls)+Number(this.activityDetail.gentlemen));
        });
        console.log('on init')
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
}
