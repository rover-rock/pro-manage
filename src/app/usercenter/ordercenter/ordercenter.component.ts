import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
@Component({
  selector: 'app-ordercenter',
  templateUrl: './ordercenter.component.html',
  styleUrls: ['./ordercenter.component.css']
})
export class OrdercenterComponent implements OnInit {


  orders_done:string[]=['','',''];
  orders_paying:string[]=['','',''];
  orders_payed:string[]=['','',''];
  constructor(public dialog:MatDialog) { }

  ngOnInit() {
  }

  
  openDialog(operation): void {
    let dialogRef = this.dialog.open(AlertDialog, {
      height: '160px',
      width: '300px',
      data: { operation: operation }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(`Dialog result: ${result}`);
      if(result==true)
      this.cancelOrder();
    });
  }
  //取消订单
  cancelOrder():void{
    console.log('cancel order');
  }
  //删除订单
  delOrder():void{
    this.orders_payed.splice(1,1);
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
