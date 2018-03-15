import { Component,OnInit,Input} from '@angular/core';


@Component({
  selector: 'activity-detail',
  templateUrl: './activity-detail.html',
  styleUrls: ['./activity-detail.css'],

})
export class ActivityDetailComponent implements OnInit {

    comments:string[]=['','','','','',''];
    ngOnInit():void{

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
