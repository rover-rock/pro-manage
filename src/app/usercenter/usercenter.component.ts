import { Component, OnInit,Inject,HostBinding } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { RotateAnimation } from "../animations";
import { User, UserService } from '../user.service';
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-usercenter',
  templateUrl: './usercenter.component.html',
  styleUrls: ['./usercenter.component.css'],
  animations:[RotateAnimation],
  providers:[UserService]
})
export class UsercenterComponent implements OnInit {
  @HostBinding('@rotateRouteAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';

  panelOpenState: boolean = false;
  name: string='安东尼';
  sex:string='male';
  age:number=0;
  constructor(public dialog: MatDialog,public userService:UserService,public route:ActivatedRoute) {}

  ngOnInit(){
    let user=this.userService.getUser();
    user.openid=this.route.snapshot.paramMap.get('openid');
    this.userService.setUser(user)

  }
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
