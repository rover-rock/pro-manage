import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Activity, ActivityService } from '../../activitycenter/activities.service';

@Component({
  selector: 'app-act-detail',
  templateUrl: './act-detail.component.html',
  styleUrls: ['./act-detail.component.css']
})
export class ActDetailComponent implements OnInit {
  actDetail:Activity;
  activityDetail$:Observable<Activity>;
  constructor(private route: ActivatedRoute,
    private service: ActivityService) { }

  ngOnInit() {
    this.activityDetail$=this.route.paramMap.pipe(
      switchMap((params:ParamMap)=>
      this.service.getActivity(params.get('id') ))
      );
      this.activityDetail$.subscribe(result=>{
      this.actDetail=result;
  })
}
}
