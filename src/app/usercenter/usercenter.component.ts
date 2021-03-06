import { Component, OnInit,Inject,HostBinding } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { User, UserService } from '../user.service';
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-usercenter',
  templateUrl: './usercenter.component.html',
  styleUrls: ['./usercenter.component.css'],

})
export class UsercenterComponent implements OnInit {
  panelOpenState: boolean = false;
  user:User;
  constructor(public dialog: MatDialog,public userService:UserService,public route:ActivatedRoute) {}

  ngOnInit(){
    this.user=this.userService.getUser()
  }
  openDialog(): void {
    let dialogRef = this.dialog.open(NameDialog, {
      height: '400px',
      width: '300px',
      data: { name: this.user.intro }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(`Dialog result: ${result}`);
     this.user.intro=result;
     this.userService.addUser(this.user).subscribe()
    });
  }
  modifyName(name){

    this.user.nickname=name;
    this.userService.addUser(this.user).subscribe();
  }
  modifySex(sex){
    this.user.sex=sex;
    this.userService.addUser(this.user).subscribe();
  }
  modifyMail(mail){
    this.user.mail=mail;
    this.userService.addUser(this.user).subscribe();
  }
  modifyCert(cert){
    this.user.cert_num=cert;
    this.userService.addUser(this.user).subscribe();
  }
  modifyPhone(phone){
    this.user.phone=phone;
    this.userService.addUser(this.user).subscribe();
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
