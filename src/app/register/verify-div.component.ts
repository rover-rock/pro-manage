import { Component,EventEmitter,Input,Output } from '@angular/core';
import { User } from "../user";
@Component({
  selector: 'verify-div',
  templateUrl: './verify-div.component.html',
  styles:[`
      .round{
        border-top-left-radius: 3em;
        border-top-right-radius: 3em;
      }
  `]
})
export class VerifyDivComponent {
    @Input()  com_name:string;
    @Input()  text:string;
    @Input() isround:boolean=false;
    @Input() image:string='';
      name:string;
    @Output() onchange=new EventEmitter<string>();
    change(){
      this.onchange.emit(this.name);

    }
    requestVerifyCode(){

    }
}
