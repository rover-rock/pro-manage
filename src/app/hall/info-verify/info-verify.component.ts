import { Component, OnInit } from '@angular/core';
import { User, UserService } from '../../user.service';
import { OrderPost,OrderService } from "../../order.service";
import { Router } from "@angular/router";
@Component({
  selector: 'app-info-verify',
  templateUrl: './info-verify.component.html',
  styleUrls: ['./info-verify.component.css'],

})
export class InfoVerifyComponent implements OnInit {
  user:User;
  order:OrderPost;
  constructor(private userService:UserService,private orderService:OrderService,private router:Router) { }

  ngOnInit() {
    this.user=this.userService.getUser();
    this.order=this.orderService.getOrder()
  }

  addOrder(){
    this.order=this.orderService.getOrder()
    this.orderService.addOrder(this.order).subscribe(data=>{
      this.orderService.id=data
      this.router.navigate(['/confirm-order'])
    });
  }
}
