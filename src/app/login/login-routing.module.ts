import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ActsComponent } from "../hall/acts/acts.component";
import { LoginComponent } from "../login/login.component";
import { WelcomeComponent } from "./welcome.component";
import { UserResovler } from "../route.service";
const loginRoutes: Routes =
 [{ path: "enter",
 component: WelcomeComponent,
 children:[{
   path:':openid',
   component:LoginComponent,
   resolve:{
     user:UserResovler
   }
 }]
 }];

@NgModule({
  imports: [RouterModule.forChild(loginRoutes)],
  exports: [RouterModule],
  providers: [UserResovler]
})
export class LoginRoutingModule {}
