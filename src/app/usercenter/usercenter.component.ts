import { Component, OnInit,Inject,HostBinding } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { RotateAnimation } from "../animations";
@Component({
  selector: 'app-usercenter',
  templateUrl: './usercenter.component.html',
  styleUrls: ['./usercenter.component.css'],
  animations:[RotateAnimation]
})
export class UsercenterComponent  {
  @HostBinding('@rotateRouteAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';

  panelOpenState: boolean = false;
  name: string='安东尼';
  sex:string='male';
  age:number=0;
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    let dialogRef = this.dialog.open(NameDialog, {
      height: '400px',
      width: '300px',
      data: { name: this.name }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(`Dialog result: ${result}`);
     this.name=result;
    });
  }

}


@Component({
  selector: 'name-dialog',
  templateUrl: 'name-dialog.html',
})
export class NameDialog {
  name:string;
  constructor(
    public dialogRef: MatDialogRef<NameDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }


}
