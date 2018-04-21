import { Injectable } from "@angular/core";
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';

export class User {
  constructor(
    public nickname: string,
    public sex: string,
    public pwd: string,
    public mail: string,
    public realname: string,
    public phone: number,
    public cert_type: string,
    public cert_num:string,
    public openid:string,
    public heart:number,
    public avatar:string,
    public intro:string
  ) {}
}
export class Choose {
  constructor(
   public avatar:string,
   public nickname:string,
   public sex:string,
   public state:string,
   public openid:string
  ) {}
}
//上传的数据结构
export class Palace{
  constructor(
    public id:number,
    public openid:string,
    public at_openid:string,
    public heart:number,
    public time:number
  ){}
}
//下载获取的数据结构，信息更多一些，需要显示
export class Palace_get{
  constructor(
    public id:number,
    public openid:string,
    public at_openid:string,
    public heart:number,
    public time:number,
    public nickname:string,
    public avatar:string
  ){}
}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};
const baseUrl="http://fu.dicyan.cn/app/index.php?i=3&c=entry&m=friendsocity"
@Injectable()
export class UserService {
  constructor(private http: HttpClient) {

  }
  user:User=new User('','','','','',0,'','','28',0,'','');
  chooses:any;
  addUser(user:User):Observable<string>{
    let url=baseUrl+'&do=adduser';
    this.setUser(user)
    return this.http.post<string>(url,user);
  }
  initUser(openid):Observable<User>{
    let url=baseUrl+"&do=getuser&openid="+openid
    return this.http.get<User>(url);
  }

  hasChooses(openid){
    let url=baseUrl+'&do=getchooses&openid='+openid
    this.chooses=this.http.get(url)
    return this.chooses
  }

  getUser():User{
    let data=localStorage.getItem('user')
    if(data==null||undefined)
    {
      return this.user;
    }
    else{
      return JSON.parse(data)
    }
  }
  setUser(user){
    localStorage.setItem('user',JSON.stringify(user))
    this.user=user;
  }
  //获取宫中人
  getHouse(openid){
      let url=baseUrl+'&do=gethouse&openid='+openid
      return this.http.get<Palace_get[]>(url)
  }
  setHouse(data:Palace){

    let url=baseUrl+'&do=sethouse'
    return  this.http.post<Palace>(url,data)
  }
  //选择页，加减好感度
  addHeart(at_openid){
    let url=baseUrl+'&do=addheart&openid='+this.user.openid+'&at_openid='+at_openid
      return this.http.get(url)
  }
  subHeart(at_openid){
    let url=baseUrl+'&do=subheart&openid='+this.user.openid+'&at_openid='+at_openid
      return this.http.get(url)
  }
  setchoosed(orderid){
    let url=baseUrl+'&do=setchoosed&orderid='+orderid
    this.http.get(url).subscribe()
  }
}
