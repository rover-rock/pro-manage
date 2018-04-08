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
    public price:number
  ) {}
}

@Injectable()
export class ActivityService {
  constructor(private http: HttpClient) {}

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
}
