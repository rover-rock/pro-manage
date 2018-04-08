import { Component, OnInit } from '@angular/core';
import { User, UserService } from '../../user.service';
import { Order,OrderService } from "../../order.service";
@Component({
  selector: 'app-info-verify',
  templateUrl: './info-verify.component.html',
  styleUrls: ['./info-verify.component.css'],
  providers:[UserService,OrderService]
})
export class InfoVerifyComponent implements OnInit {
  user:User;
  order:Order;
  constructor(private userService:UserService,private orderService:OrderService) { }

  ngOnInit() {
    this.user=this.userService.getUser();
  }

  addOrder(){

  }
}
