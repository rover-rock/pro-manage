import { Component, OnInit } from '@angular/core';
import { Palace, UserService } from '../../user.service';
@Component({
  selector: 'app-palace',
  templateUrl: './palace.component.html',
  styleUrls: ['./palace.component.css']
})
export class PalaceComponent implements OnInit {

  persons:number[]=[100,90,80,70];
  persons_cold:Palace[]=new Array()
  persons_hot:Palace[]=new Array()
  constructor(private userService:UserService) { }

  ngOnInit() {
    //todo:获取该用户，宫中所有人，信息，魅力值
    //取该用户
    let openid=this.userService.getUser().openid
    //取宫中人
    this.userService.getHouse(openid).subscribe(result=>{
        result.forEach(element => {
          if(element.heart>0){
            this.persons_hot.push(element)
          }
          else{
            this.persons_cold.push(element)
          }
        });
        this.persons_hot.sort()
    })
    //后宫排序

  }
  makecold(i){
    //降低对某人喜欢值，若为0，进冷宫
    this.persons_hot[i].heart-=10;

    this.userService.setHouse(this.persons_hot[i]).subscribe()
  }
  makehot(i){
    //提高对某人喜欢值，大于0，进后宫
    this.persons_hot[i].heart =Number(this.persons_hot[i].heart)+10
    this.userService.setHouse(this.persons_hot[i]).subscribe()
  }
}
