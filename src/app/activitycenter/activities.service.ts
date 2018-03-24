import { Injectable} from '@angular/core';
import { HttpClient } from "@angular/common/http";

export class Activity{
  constructor(public id:number, public title:string,public gentlemen:number,public girls:number,public start_time:string,public banner:string){}
}


@Injectable()
export class ActivityService{
    constructor(private http:HttpClient){};




      getActivities():Promise<Activity[]>{
       return  this.http.get<Activity[]>('http://fu.dicyan.cn/app/index.php?i=3&c=entry&do=getactivities&m=friendsocity').toPromise();


      }

}
