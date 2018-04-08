import { Component, OnInit,HostBinding } from '@angular/core';
import { slideInDownAnimation } from "../../animations";
import { Activity, ActivityService } from '../../activitycenter/activities.service';
import { element } from 'protractor';
@Component({
  selector: 'app-acts',
  templateUrl: './acts.component.html',
  styleUrls: ['./acts.component.css'],
  animations:[slideInDownAnimation]
})
export class ActsComponent implements OnInit {

  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  acts:Activity[]=new Array();
  spec_act:Activity;
  left_acts:Activity[]=new Array();
  right_acts:Activity[]=new Array();
  constructor(private actService:ActivityService) { }

  ngOnInit() {
      this.actService.getActivities().then(result=>{
        result.forEach((element,index)=>{
          if(element.confirm_end==1){
            this.acts.push(element)
            this.acts.sort((a,b)=>{
              return a.create_time-b.create_time
            })
          }
        })

        this.acts.forEach((element,index) => {
            if(index%2==0){
            this.left_acts.push(element)
            }
            else{
            this.right_acts.push(element);
            }
        });
        if(this.right_acts.length>0){
          this.spec_act=this.right_acts.pop()
        }
      })

  }

}
