import { Component, OnInit } from '@angular/core';
import { UserService,User  } from "../../user.service";
import {  OrderService, OrderPost } from '../../order.service';
@Component({
  selector: 'app-confirm-order',
  templateUrl: './confirm-order.component.html',
  styleUrls: ['./confirm-order.component.css']
})
export class ConfirmOrderComponent implements OnInit {

  constructor(private userService:UserService,private orderService:OrderService) { }
  user:User;
  order:OrderPost
  orderid:number
  address:string
  start_time:string
  ngOnInit() {
    this.user=this.userService.getUser()
    this.order=this.orderService.getOrder()
    console.log(this.orderService.id)
    this.orderid=this.orderService.id
    this.address=this.orderService.adress
    this.start_time=this.orderService.start_time
  }

}
