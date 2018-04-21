import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

export class Activity {
  constructor(
    public id: number,
    public title: string,
    public gentlemen: number,
    public girls: number,
    public start_time: string,
    public titleimage: string,
    public bannerimages:string[],
    public liveimages:string[],
    public intro:string,
    public confirm_end:number,
    public create_time:number,
    public price:number,
    public address:string
  ) {}
}
export class Comment{
  constructor(
    public matingid:number,
    public title:string,
    public openid:string,
    public nickname:string,
    public comment:string,

  ){}
}
@Injectable()
export class ActivityService {
  constructor(private http: HttpClient) {}
  activity:Activity;
  getActivities(): Promise<Activity[]> {
    return this.http
      .get<Activity[]>(
        "http://fu.dicyan.cn/app/index.php?i=3&c=entry&do=getactivities&m=friendsocity"
      )
      .toPromise();
  }
  getActivity(id): Observable<Activity> {
    return this.http
      .get<Activity>(
        "http://fu.dicyan.cn/app/index.php?i=3&c=entry&do=getactivities&m=friendsocity&id=" +
          id
      )
      ;
  }

  getComments(matingid):Observable<Comment[]>{
    return this.http
      .get<Comment[]>("http://fu.dicyan.cn/app/index.php?i=3&c=entry&do=getcomments&m=friendsocity&matingid="+matingid)
  }
  addComment(comment){
    let url="http://fu.dicyan.cn/app/index.php?i=3&c=entry&do=addcomment&m=friendsocity"
    return this.http.post<Comment>(url,comment)
  }
}
