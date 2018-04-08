import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Order,OrderService } from "../../order.service";
import { element } from 'protractor';
import { UserService } from '../../user.service';
@Component({
  selector: 'app-ordercenter',
  templateUrl: './ordercenter.component.html',
  styleUrls: ['./ordercenter.component.css']
})
export class OrdercenterComponent implements OnInit {
  orderid:number;
  orders:Order[]=new Array();
  orders_done:Order[]=new Array();
  orders_paying:Order[]=new Array();
  orders_payed:Order[]=new Array();
  constructor(public dialog:MatDialog,public orderService:OrderService,public userService:UserService) { }

  ngOnInit() {
    let openid=this.userService.getUser().openid
    this.orderService.getOrders(openid).subscribe(result=>{
        this.orders=result;
        this.orders.forEach((element,index) => {
          if(element.status==0){
            this.orders_paying.push(element)
          }
          else if(element.status==1){
            this.orders_payed.push(element);
          }
          else {
            this.orders_done.push(element)
          }
        });
    })
  }


  openDialog(operation,orderid): void {
    this.orderid=orderid
    let dialogRef = this.dialog.open(AlertDialog, {
      height: '160px',
      width: '300px',
      data: { operation: operation }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(`Dialog result: ${result}`);
      if(result==true)
      this.cancelOrder(this.orderid);
    });
  }
  //取消订单
  cancelOrder(orderid):void{
    console.log('cancel order'+orderid);
    this.orderService.changeOrder(orderid,-1).subscribe()
    this.orders_paying.forEach((element,index)=>{
      if(element.id===orderid){
        this.orders_paying.splice(index,1)
      }
    })
  }
  //删除订单
  delOrder():void{
    this.orders_payed.splice(1,1);
  }
  pay(orderid){

      this.orderService.pay(orderid)
  }



}



@Component({
  selector: 'alert-dialog',
  templateUrl: 'alert-dialog.html',
})
export class AlertDialog {

  constructor(
    public dialogRef: MatDialogRef<AlertDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }


}
