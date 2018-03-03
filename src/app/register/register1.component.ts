import { Component } from '@angular/core';
import { User } from "../user";
import { environment } from '../../environments/environment';

@Component({
  selector: 'register1',
  templateUrl: './register1.component.html',

})
export class Register1Component {
  model:User=new User('','',1);
  onSubmit(){
    console.log(this.model);
  }
}
