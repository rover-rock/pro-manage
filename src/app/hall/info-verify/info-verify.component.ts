import { Component, OnInit } from '@angular/core';
import { User, UserService } from '../../user.service';
@Component({
  selector: 'app-info-verify',
  templateUrl: './info-verify.component.html',
  styleUrls: ['./info-verify.component.css'],
  providers:[UserService]
})
export class InfoVerifyComponent implements OnInit {
  user:User;
  constructor(private userService:UserService) { }

  ngOnInit() {
    this.user=this.userService.getUser();
  }

}
