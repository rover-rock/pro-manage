import {Component} from '@angular/core';

@Component({
  selector: 'messages',
  templateUrl: './message.component.html'
})
export class Message {

  alerts:any[] = [{
    type: 'success',
    msg: 'Thanks for visiting! Feel free to create pull requests to improve the dashboard!'
  }, {
    type: 'danger',
    msg: 'Found a bug? Create an issue with as many details as you can.'
  }];

  addAlert() {
    this.alerts.push({
      msg: 'Another alert!'
    });
  }

  closeAlert(index) {
    this.alerts.splice(index, 1);
  }
}
