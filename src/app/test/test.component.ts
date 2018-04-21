import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  root:Member=new Member(1,'root',0,0,0,0)
  name:string=''
  parent:number=1
  recommender:number=1
  award:number=0
  awardout:number=0
  member_cursor:number=1
  members:Member[]=new Array()

  group_cursor:number=1
  groups:Group[]=new Array()
  groups_last:Group[]=new Array()
  displayedColumns=['id','name','parent','recommender','award','awardout']
  displayedColumns2=['id','m1','m2','m3','full']

  income:number=0
  cost:number=0
  constructor() { }

  logs:string[]=new Array()
  logindex:number=0
  ngOnInit() {
    let group=new Group(1,0,0,0,0)
    group.m1=1
    this.members.push(this.root)
    this.groups.push(group)
    this.groups_last=this.groups
  }

  reset(){
    this.root=new Member(1,'root',0,0,0,0)
    this.members=new Array()
    this.groups=new Array()
    this.cost=0
    this.income=0
    this.logs=new Array()
    this.member_cursor=1
    this.group_cursor=1
    let group=new Group(1,0,0,0,0)
    group.m1=1
    this.members.push(this.root)
    this.groups.push(group)
    this.groups_last=this.groups
    this.logindex=0
  }

  addMember(){
    localStorage.setItem('group',JSON.stringify(this.groups))
    this.groups_last=JSON.parse(localStorage.getItem('group'))
    //加入成员，确立上线
    this.member_cursor++
    let member:Member=new Member(1,'',1,0,0,0)
    member.name=this.name
    member.id=this.member_cursor
    member.parent=this.parent
    member.recommender=this.recommender
    this.members.push(member)

    //加入小组，拆分
    this.logindex++
    let log='第'+ this.logindex+ '次小组成员循环:'
    this.logs.push(log)
    this.join(member.id,member.parent)

    this.income=Number(this.income)+10000
  }

  join(child,parent){
    //推荐人2000入局奖
    let recommender=this.members[child-1].recommender-1
    if(recommender>=0){
      this.members[recommender].award=Number(this.members[recommender].award)+2000
      this.cost=this.cost-2000
    }

    let log='**id为'+child+'成员加入id为'+parent+'被协助人所在小组**'
    this.logs.push(log)
    if(parent===1){
      if(this.groups[0].m2==0){
        this.groups[0].m2=child
      }
      else{
        this.group_cursor++
        let group1=new Group(this.group_cursor,this.groups[0].m2,0,0,0)
        this.groups[0].m2=0
        this.group_cursor++
        let group2=new Group(this.group_cursor,child,0,0,0)
        this.groups.push(group1)
        this.groups.push(group2)
        this.members[0].awardout=Number(this.members[0].awardout)+1000
        this.cost=this.cost-1000
      }
      return ;
    }
    //上级在否m1位置
    let index= this.groups.find((value:Group)=>{
      return value.m1===parent
    })
    if(index===undefined){
      this.group_cursor++
      let group=new Group(this.group_cursor,parent,child,0,0)
      this.groups.push(group)
    }
    else{
      if(index.m2==0){
        index.m2=child
      }
      else{
        this.group_cursor++
        let group1=new Group(this.group_cursor,index.m2,0,0,0)
        this.group_cursor++
        let group2=new Group(this.group_cursor,child,0,0,0)
        this.groups.push(group1)
        this.groups.push(group2)
        this.groups.splice(this.groups.findIndex((value)=>{
          return value===index
        }),1)
        let data=this.groups.find((value:Group)=>{
          return value.m2===parent
        })
        this.members[parent-1].awardout=Number(this.members[parent-1].awardout)+1000
        this.cost=this.cost-1000

        if(data===undefined){
          //不在另一小组，找其上级所在小组
           let data2=this.members.find((value:Member)=>{
            return value.id==parent
            })
            this.join(parent,data2.parent)
        }
        else{
          //在另一个小组
          console.log(parent)
          let recommender=this.members[parent-1].recommender-1
          if(recommender>=0){
            console.log(recommender)
          this.members[recommender].award=Number(this.members[recommender].award)+2000
          this.cost=this.cost-2000
                            }
        }
      }
    }
  }








}









class Member{
  constructor(
    public id:number,
    public name:string,
    public parent:number,
    public recommender:number,
    public award:number,
    public awardout:number
  ){}
}
class Group{
  constructor(
    public id:number,
    public m1:number,
    public m2:number,
    public m3:number,
    public full:number
  ){}
}
