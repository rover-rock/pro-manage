import { Injectable }             from '@angular/core';
import { Router, Resolve, RouterStateSnapshot,
         ActivatedRouteSnapshot } from '@angular/router';
import { Observable }             from 'rxjs';
import { map, take }              from 'rxjs/operators';
import { User, UserService } from './user.service';
import { ActivityService, Activity } from './activitycenter/activities.service';
@Injectable()
export class UserResovler implements Resolve<User> {
  constructor(private userService:UserService,private router:Router){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<User>{
    let openid = route.paramMap.get('openid')
    this.userService.initUser(openid).subscribe(result=>{
      //导航之前，就应该设置好单例的服务

      console.log(result)
      if(!result){
        this.userService.user.openid=openid;
        this.router.navigate(['/register'])
      }
      else {

        this.userService.setUser(result)
        this.userService.hasChooses(openid).subscribe(res=>{
          if(res['result']=='chooses'){
            this.router.navigate(['/chooses'])
          }
          else{
            this.router.navigate(['/acts'])
          }
        })

      }

    })

    return this.userService.initUser(openid)



  }
}
@Injectable()
export class ActivityResolver implements Resolve<Activity> {
  constructor(private activityService:ActivityService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<Activity>{
    console.log(route.paramMap.get('id'))
   return  this.activityService.getActivity(route.paramMap.get('id'))
  }
}
