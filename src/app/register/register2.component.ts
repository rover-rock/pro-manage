import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,

} from '@angular/animations';
import { User } from "../user";
@Component({
  selector: 'register2',
  templateUrl: './register2.component.html',

  animations:[
    trigger('selected', [
      state('active', style({backgroundColor:'white',transform:'scale(1.2)'})),
      state('inactive',style({backgroundColor:'lightpink',transform:'scale(1)'})),
      transition('active => inactive', animate('200ms ease-in')),
      transition('inactive => active', [
        animate(4000, keyframes([
          style({ transform: 'scale(2)',  offset: 0.1}),
          style({ transform: 'scale(1.2)',  offset: 0.2}),
          style({ transform: 'scale(2)',  offset: 0.3}),
          style({ transform: 'scale(1.2)',  offset: 0.4}),
          style({ transform: 'scale(2)',  offset: 0.6}),
          style({ transform: 'scale(1.2)',  offset: 0.8}),
          style({ transform: 'scale(2)',  offset: 0.9}),
        ]))
      ]),


    ]),
    trigger('choosed',[
      state('active', style({transform:'scale(1)',opacity:1,height:'400px'})),
      state('inactive',style({transform:'scale(0)',opacity:0,height:'0'})),
      transition('active <=> inactive', animate('500ms ease-in'))
    ]),

    trigger('hover',[
      state('hover', style({boxShadow:'0px 0px 23px 5px #a2747c'})),
      state('inactive',style({boxShadow:'0px 9px 23px 5px #a2747c'})),
      transition('active <=> inactive', animate('100ms ease-in'))
    ])
  ]
})

export class Register2Component {
  state:string[]=["active","inactive","inactive"];
  page:string[]=["active","inactive","inactive"];
  hover:string='inactive';
  indicator:number=0;

  user:User;
  toggleState(i:number){
    this.state=["inactive","inactive","inactive"];
    this.state[i]="active";
    this.page=["inactive","inactive","inactive"];
    this.page[i]="active";

    console.log(this.state)
  }
  onHover(){
    this.hover=this.hover==='inactive'?'active':'inactive';
    setTimeout(()=>this.hover=this.hover==='inactive'?'active':'inactive',200);
    console.log(this.indicator);
    this.toggleState(this.indicator);
    if(this.indicator==2){
      this.indicator=0
    }
    else{
      this.indicator+=1;
    }
  }
}
