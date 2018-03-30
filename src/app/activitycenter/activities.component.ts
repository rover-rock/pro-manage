import { Component,OnInit} from '@angular/core';
import { ActivityService,Activity } from './activities.service';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css'],
  providers:[ActivityService],

})
export class ActivitiesComponent implements OnInit{


  results:Activity[];
  constructor(private actService:ActivityService,private http:HttpClient){};


  ngOnInit():void{
    this.actService.getActivities().then(data=>{this.results=data});

    var mySwiper = new Swiper ('.swiper-container', {
      direction: 'horizontal',


      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination'
      },
      dynamicBullets:true,
      longSwipesRatio: 0.3,
      touchRatio:1,
      observer:true,//修改swiper自己或子元素时，自动初始化swiper
      observeParents:true,//修改swiper的父元素时，自动初始化swiper
      autoplay:2000,
      effect : 'coverflow',
    slidesPerView: 1,
    centeredSlides: true,
    coverflowEffect: {
    rotate: 30,
    stretch: 10,
    depth: 60,
    modifier: 2,
    slideShadows : true
  },


    })

  }




}
