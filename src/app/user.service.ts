import { Injectable } from "@angular/core";
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { UsercenterComponent } from './usercenter/usercenter.component';

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
    public openid:string
  ) {}
}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}
  user:User=new User('aaa','','','','',0,'','','');
  getActivities(): Promise<User[]> {
    return this.http
      .get<User[]>(
        "http://fu.dicyan.cn/app/index.php?i=3&c=entry&do=getactivities&m=friendsocity"
      )
      .toPromise();
  }
  getActivity(id): Observable<User> {
    return this.http
      .get<User>(
        "http://fu.dicyan.cn/app/index.php?i=3&c=entry&do=getactivities&m=friendsocity&id=" +
          id
      )
      ;
  }

  addUser(user:User):Observable<User>{
    let url="http://fu.dicyan.cn/app/index.php?i=3&c=entry&do=adduser&m=friendsocity";
    this.user=user;
    return this.http.post<User>(url,user);
  }
  getUser():User{
    return this.user;
  }
  setUser(user){
    this.user=user;
  }
}
