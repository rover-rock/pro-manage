import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService, Choose } from '../../user.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,

} from '@angular/animations';
@Component({
  selector: 'app-chooses',
  templateUrl: './chooses.component.html',
  styleUrls: ['./chooses.component.css'],
  animations:[
    trigger('pop', [
      state('active', style({transform:'scale(1.2)'})),
      state('inactive',style({transform:'scale(1)'})),
      transition('active <=> inactive', animate('200ms ease-in')),

    ]),
    trigger('popup', [
      state('active', style({transform:'translateY(200px)',opacity:1})),
      state('inactive',style({top:'-100px',opacity:0})),
      transition('active <=> inactive', animate('2000ms ease-in')),

    ])
  ]
})

export class ChoosesComponent implements OnInit {
  hot='inactive';
  cold='inactive';
  choose_times:number=0;
  over:string='inactive';
  divs:Choose[]=new Array();
  //正在选择的订单号
  orderid:number;
  constructor(private router:Router,private userService:UserService) { }


  ngOnInit() {
      this.userService.hasChooses(this.userService.getUser().openid).subscribe(res=>{
        res['data'].forEach(element => {
          if(element['sex']!=this.userService.getUser().sex){
            this.divs.push(element)
          }
        });
        this.orderid=res['orderid']
      })
  }

  pophot(){

    this.hot='active';
    setTimeout(() => {
      this.hot='inactive'
    }, 200);
    setTimeout(() => {
      this.hot='active'
    }, 600);
    setTimeout(() => {
      this.hot='inactive'
    }, 800);
  }
  popcold(){

    this.cold='active';
    setTimeout(() => {
      this.cold='inactive'
    }, 200);
    setTimeout(() => {
      this.cold='active'
    }, 600);
    setTimeout(() => {
      this.cold='inactive'
    }, 800);
  }
  choose(e){
    if(e=='left') this.popcold();
    else if(e=='right') this.pophot();
    this.choose_times++;
    if(this.choose_times>=this.divs.length){
      console.log('over')
      this.over='active';
    }
  }
  chooseleft(){
    this.divs[this.divs.length-1-this.choose_times]['state']='left';
    this.userService.subHeart(this.divs[this.divs.length-1-this.choose_times].openid).subscribe()
    this.choose_times++
    if(this.choose_times>=this.divs.length){
      this.over='active';
      this.userService.setchoosed(this.orderid)
    }

    //todo:当前用户减一评价
    this.popcold()
  }
  chooseright(){
    this.divs[this.divs.length-1-this.choose_times]['state']='right';
    this.userService.addHeart(this.divs[this.divs.length-1-this.choose_times].openid).subscribe()
    this.choose_times++
    if(this.choose_times>=this.divs.length){
      this.over='active';
      this.userService.setchoosed(this.orderid)
    }

    //todo：当前用户加一评价
    this.pophot()
  }

}
