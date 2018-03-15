import { Component,OnInit} from '@angular/core';
import { Activity,ActivityService } from './activitycenter/activities.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ActivityService],
})
export class AppComponent  implements OnInit {


    constructor(private actService:ActivityService){}
    ngOnInit():void{


    }

}
