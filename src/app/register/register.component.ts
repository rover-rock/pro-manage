import { Component,Injectable } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,

} from '@angular/animations';
import { User } from "../user";
import { HttpClient } from "@angular/common/http";
@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls:['./register.component.css'],
  animations:[
    trigger('selected', [
      state('active', style({backgroundColor:'white',transform:'scale(1.2)'})),
      state('inactive',style({backgroundColor:'lightpink',transform:'scale(1)'})),
      transition('active => inactive', animate('200ms ease-in')),
      transition('inactive => active', [
        animate(4000, keyframes([
          style({ transform: 'scale(1.1)',  offset: 0.1}),
          style({ transform: 'scale(1.2)',  offset: 0.2}),
          style({ transform: 'scale(1)',  offset: 0.3}),
          style({ transform: 'scale(1.2)',  offset: 0.4}),
          style({ transform: 'scale(1)',  offset: 0.6}),
          style({ transform: 'scale(1.2)',  offset: 0.8}),
          style({ transform: 'scale(1)',  offset: 0.9}),
        ]))
      ]),


    ]),
    trigger('choosed',[
      state('active', style({transform:'scale(1)',opacity:1,height:'350px'})),
      state('active1', style({transform:'scale(1)',opacity:1,height:'270px'})),
      state('active2', style({transform:'scale(1)',opacity:1,height:'350px'})),
      state('inactive',style({transform:'scale(0)',opacity:0,height:'0'})),
      transition('active <=> inactive', animate('500ms ease-in')),
      transition('active1<=> inactive', animate('500ms ease-in')),
      transition('active2<=> inactive', animate('500ms ease-in')),

    ]),


    trigger('hover',[
      state('active', style({boxShadow:'0px 0px 23px 5px #a2747c'})),
      state('inactive',style({boxShadow:'0px 9px 23px 5px #a2747c'})),
      transition('active <=> inactive', animate('100ms ease-in'))
    ])
  ]
})

export class RegisterComponent {
  state:string[]=["active","inactive","inactive"];
  page:string[]=["active","inactive","inactive"];
  hover:string='inactive';
  hover_prev:string="inactive";
  indicator:number=0;
  verifycode:string;
  user:User=new User('','','','','',0,'','');

  constructor(private http:HttpClient){};
  toggleState(i:number){
    this.state=["inactive","inactive","inactive"];
    this.state[i]='active';

    this.page=["inactive","inactive","inactive"];
     if(i==1){
      this.page[1]='active1';
    }
    else if(i==2){
      this.page[2]='active2';
    }
    else{
      this.page[0]='active';
    }

    console.log(this.state)
  }
  next(){
    this.hover=this.hover==='inactive'?'active':'inactive';
    setTimeout(()=>this.hover=this.hover==='inactive'?'active':'inactive',200);


    if(this.indicator==1){
      this.indicator=2
    }
    else{
      this.indicator+=1;
    }
console.log(this.indicator);
    this.toggleState(this.indicator);
    console.log(this.user)
    this.http.get('http://fu.dicyan.cn/app/index.php?i=3&c=entry&do=getusers&m=friendsocity').subscribe(data=>{
      console.log(data)
    })

  }
  prev(){
    this.hover_prev=this.hover_prev==='inactive'?'active':'inactive';
    setTimeout(()=>this.hover_prev=this.hover_prev==='inactive'?'active':'inactive',200);
    this.indicator-=1;
    this.toggleState(this.indicator);
    console.log(this.indicator);

  }
  log(value){
    console.log(value)
  }
}
