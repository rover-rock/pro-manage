import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule }   from '@angular/router';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';

import { AppComponent } from './app.component';

import { RegisterComponent } from "./register/register.component";
import { BottomNavComponent } from "./bottom-nav.component";
import { ActivitiesComponent } from './activitycenter/activities.component';
import { ActivityDetailComponent } from "./activitycenter/activity-detail";
import { NameDialog } from "./usercenter/usercenter.component";

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatMenuModule} from '@angular/material/menu';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatSelectModule } from "@angular/material/select";
import {MatDialogModule} from '@angular/material/dialog';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSliderModule} from '@angular/material/slider';
import {MatTabsModule} from '@angular/material/tabs';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatTableModule} from '@angular/material/table';

import { UsercenterComponent } from './usercenter/usercenter.component';

import { ActsComponent } from './hall/acts/acts.component';
import { ActDetailComponent } from './hall/act-detail/act-detail.component';
import { InfoVerifyComponent } from './hall/info-verify/info-verify.component';
import { ConfirmOrderComponent } from './hall/confirm-order/confirm-order.component';
import { OrdercenterComponent,AlertDialog } from './usercenter/ordercenter/ordercenter.component';
import { ChooseComponent } from './house/choose/choose.component';
import { ChoosesComponent } from './house/chooses/chooses.component';
import { PalaceComponent } from './house/palace/palace.component';
import { UserService } from './user.service';
import { OrderService } from './order.service';
import { ActivityResolver } from './route.service';
import { LoginModule } from "./login/login.module";
import { ActivityService } from './activitycenter/activities.service';
import { resolve } from 'q';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,

    RegisterComponent,
    BottomNavComponent,
    ActivitiesComponent,
    ActivityDetailComponent,
    UsercenterComponent,
    NameDialog,
    ActsComponent,
    ActDetailComponent,
    InfoVerifyComponent,
    ConfirmOrderComponent,
    OrdercenterComponent,
    AlertDialog,
    ChooseComponent,
    ChoosesComponent,
    PalaceComponent,
    TestComponent,

  ],
  entryComponents: [
    NameDialog,
    AlertDialog,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatMenuModule,
    MatStepperModule,
    MatFormFieldModule,
    MatDialogModule,
    MatExpansionModule,
    MatSliderModule,
    MatTabsModule,
    MatListModule,
    MatDividerModule,
    MatTableModule,
    LoginModule,


   ReactiveFormsModule,
   MatInputModule,
   MatSelectModule,
   FormsModule,
    HttpClientModule,
    RouterModule.forRoot([

      {path:'activities',component:ActivitiesComponent},
      {path:'activity-detail/:id',component:ActivityDetailComponent,resolve:{activity:ActivityResolver}},
      {path:'usercenter',component:UsercenterComponent},
      {path:'acts',component:ActsComponent},
      {path:'act-detail/:id',component:ActDetailComponent},
      {path:'info-verify',component:InfoVerifyComponent},
      {path:'confirm-order',component:ConfirmOrderComponent},
      {path:'ordercenter',component:OrdercenterComponent},
      {path:'chooses',component:ChoosesComponent},
      {path:'palace',component:PalaceComponent},
      {path:'openid/:openid',component:RegisterComponent},
      {path:'register',component:RegisterComponent},
      //  {path:'',component:TestComponent},

    ])



  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy},UserService,OrderService,ActivityResolver,ActivityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
