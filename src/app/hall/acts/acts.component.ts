import { Component, OnInit,HostBinding } from '@angular/core';
import { slideInDownAnimation } from "../../animations";
import { Activity, ActivityService } from '../../activitycenter/activities.service';
@Component({
  selector: 'app-acts',
  templateUrl: './acts.component.html',
  styleUrls: ['./acts.component.css'],
  animations:[slideInDownAnimation]
})
export class ActsComponent implements OnInit {

  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  acts:Activity[];
  spec_act:Activity;
  left_acts:Activity[]=new Array();
  right_acts:Activity[]=new Array();
  constructor(private actService:ActivityService) { }

  ngOnInit() {
      this.actService.getActivities().then(result=>{
        this.acts=result;
        this.acts.forEach((element,index) => {
          console.log(index)
          if(index%2==0){
            this.left_acts.push(element)
          }
          else{
            this.right_acts.push(element);
          }
        });
        this.spec_act=this.left_acts.pop()

      })

  }

}
