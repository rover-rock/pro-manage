import { Component, OnInit } from '@angular/core';
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
      state('active', style({transform:'translateY(300px)',opacity:1})),
      state('inactive',style({top:'-100px',opacity:0})),
      transition('active <=> inactive', animate('2000ms ease-in')),

    ]),
  ],
})

export class ChoosesComponent implements OnInit {
  hot='inactive';
  cold='inactive';
  choose_times:number=0;
  over:string='inactive';
  divs:string[]=['1','2','3','4','5','6','7','8'];
  constructor() { }


  ngOnInit() {
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

}
