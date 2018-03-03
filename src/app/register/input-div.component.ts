import { Component,EventEmitter,Input,Output } from '@angular/core';
import { User } from "../user";
@Component({
  selector: 'input-div',
  templateUrl: './input-div.component.html',
  styles:[`
      .round{
        border-top-left-radius: 3em;
        border-top-right-radius: 3em;
      }
  `]
})
export class InputDivComponent {
    @Input()  com_name:string;
    @Input()  text:string;
    @Input() isround:boolean=false;
      name:string;
    @Output() onchange=new EventEmitter<string>();
    change(){
      this.onchange.emit(this.name);

    }
}
