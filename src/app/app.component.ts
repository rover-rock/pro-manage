import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[
    trigger('flyInOut', [
      state('in', style({transform: 'translateX(0)'})),
      state('out',style({transform:'translateX(20%)'})),
      transition('in <=> out', animate('100ms ease-in'))


    ])
  ]
})
export class AppComponent {
  state:string="in";
  toggleState(){
    this.state=this.state==='in'?'out':'in';
    console.log(this.state)
  }
}
