import { Component, Input,EventEmitter,Output } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,

} from '@angular/animations';
import { Choose } from '../../user.service';
@Component({
  selector: 'app-choose',
  templateUrl: './choose.component.html',
  styleUrls: ['./choose.component.css'],
  animations:[
    trigger('move', [
      state('none', style({})),
      state('left', style({transform:'translateX(-26vmin) translateY(75vmin) scale(0)'})),
      state('right',style({transform:'translateX(26vmin) translateY(75vmin) scale(0)'})),
      transition('none <=> *', animate('1000ms ease-out'))
    ]),
  ],
})
//在div中放置组件，会影响他的从事件中取值，因为产生事件的控件改变了
export class ChooseComponent  {

  @Input() div:Choose;
  constructor() { }
   pos_start:any={
    x:0,
    y:0
  }
  @Input() move='none';
  @Output() onChoose=new EventEmitter<string>();
  isdrag:boolean=false;
  pos_last:any;

  left:number;
  top:number;
  //初始位置
  divStyle={
    background: 'white',
    left: '15%',
    top:'10%',
    height: '40%',
    width: '70%',
    'border-radius':'20px',
    position: 'fixed',
    'box-shadow': '#ece6e6 0px 0px 1px 1px',
    opacity:1
  }


  dragstart(e){

    console.log('drag start')
    this.isdrag=true;
    //初始div位置,只能去找合适的属性值来设置
    this.left=e.srcElement.offsetParent.offsetLeft;
    this.top=e.srcElement.offsetParent.offsetTop;
    this.pos_start={
      x:e.touches[0].clientX,
      y:e.touches[0].clientY
    }
    this.pos_last=this.pos_start;
  }

  drag(e){
    let offsetX=e.touches[0].clientX-this.pos_last['x'];
    let offsetY=e.touches[0].clientY-this.pos_last['y'];
    if(Math.abs(offsetX) >2||Math.abs(offsetY) >2){
      this.pos_last={
        x:e.touches[0].clientX,
        y:e.touches[0].clientY

      }
      this.left+=offsetX;
      this.divStyle.left=this.left+'px';
      this.top+=offsetY;
      this.divStyle.top=this.top+'px'

    }
  }

  dragend(){
      if(Math.abs(this.pos_last['x']-this.pos_start.x)<80){
          console.log('left')
          this.divStyle.left="15%";
          this.divStyle.top="10%";
      }
      else if(this.pos_last['x']-this.pos_start.x>=80)
      {
        this.onChoose.emit('right');
          console.log('right');
          let ll=this.left;
          let tt=this.top;
         let  ii=setInterval(()=>{
            ll+=10;tt+=10;
            this.divStyle.left=ll+'px';
          this.divStyle.top=tt+'px';
          this.divStyle.opacity-=0.1;
          if(ll>500) clearInterval(ii);
          },10)


      }
      else if(this.pos_last['x']-this.pos_start.x<=-80){
        this.onChoose.emit('left');
        console.log('left');
        let ll=this.left;
        let tt=this.top;
       let  ii=setInterval(()=>{
          ll-=10;tt+=10;
          this.divStyle.left=ll+'px';
        this.divStyle.top=tt+'px';
        this.divStyle.opacity-=0.1;
        if(ll<-500) clearInterval(ii);
        },10)

      }

  }



}
