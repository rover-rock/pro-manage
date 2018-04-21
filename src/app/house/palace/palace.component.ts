import { Component, OnInit } from '@angular/core';
import { Palace_get,Palace, UserService } from '../../user.service';
@Component({
  selector: 'app-palace',
  templateUrl: './palace.component.html',
  styleUrls: ['./palace.component.css']
})
export class PalaceComponent implements OnInit {

  persons_cold:Palace_get[]=new Array()
  persons_hot:Palace_get[]=new Array()
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
        this.persons_hot.sort((a,b)=>{
          return b.heart-a.heart;
        })
    })

  }
  // makecold(i){
  //   //降低对某人喜欢值，若为0，进冷宫
  //   let person:Palace
  //   person.id=this.persons_hot[i].id
  //   person.openid=this.persons_hot[i].openid
  //   person.at_openid=this.persons_hot[i].at_openid
  //   person.time=this.persons_hot[i].time
  //   person.heart= this.persons_hot[i].heart-10;
  //   this.persons_hot[i].heart-=10;
  //   this.persons_hot.sort((a,b)=>{
  //     return b.heart-a.heart;
  //   })
  //   this.userService.setHouse(person).subscribe()
  // }
  // makehot(i){
  //   //提高对某人喜欢值，大于0，进后宫
  //   this.persons_hot[i].heart =Number(this.persons_hot[i].heart)+10
  //   this.persons_hot.sort((a,b)=>{
  //     return b.heart-a.heart;
  //   })
  //   this.userService.setHouse(this.persons_hot[i]).subscribe()
  // }
    makehot(i){
      let person:Palace=new Palace(1,'','',1,1)
    person.id=this.persons_cold[i].id
    person.openid=this.persons_cold[i].openid
    person.at_openid=this.persons_cold[i].at_openid
    person.time=this.persons_cold[i].time
    person.heart=10;
    this.userService.setHouse(person).subscribe()


    this.persons_hot.push(this.persons_cold.splice(i,1)[0])
    }
}
