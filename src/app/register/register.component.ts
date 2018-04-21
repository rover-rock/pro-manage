import { Component,Injectable,OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,

} from '@angular/animations';
import { User,UserService } from "../user.service";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls:['./register.component.css'],
  animations:[
    trigger('selected', [
      state('active', style({backgroundColor:'white',transform:'scale(1.2)'})),
      state('inactive',style({backgroundColor:'lightpink',transform:'scale(1)'})),
      transition('active => inactive', animate('200ms ease-in')),
      transition('inactive => active', animate('200ms ease-in'))
      ]),
    trigger('choosed',[
      state('active', style({transform:'scale(1)',opacity:1,height:'250px'})),
      state('active1', style({transform:'scale(1)',opacity:1,height:'200px'})),
      state('active2', style({transform:'scale(1)',opacity:1,height:'250px'})),
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
  ],

})

export class RegisterComponent implements OnInit {

  state:string[]=["active","inactive","inactive"];
  page:string[]=["active","inactive","inactive"];
  hover:string='inactive';
  hover_prev:string="inactive";
  indicator:number=0;
  verifycode:string;
  user:User;

  constructor(private userService:UserService,private route: ActivatedRoute){};
  ngOnInit(){
    //this.user.openid=this.route.snapshot.paramMap.get('openid');
    this.route.data.subscribe((data:{user:User})=>{
      console.log(data)
    })
    console.log(this.userService.user)
    this.user=this.userService.getUser();
  }
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
      this.addUser();
    }
    else{
      this.indicator+=1;
    }
    this.toggleState(this.indicator);



  }
  prev(){
    this.hover_prev=this.hover_prev==='inactive'?'active':'inactive';
    setTimeout(()=>this.hover_prev=this.hover_prev==='inactive'?'active':'inactive',200);
    this.indicator-=1;
    this.toggleState(this.indicator);
    console.log(this.indicator);

  }

  acquireVerifyCode(){

  }
  addUser(){
    this.userService.addUser(this.user).subscribe(res=>this.userService.user.avatar=res);
  }
}
