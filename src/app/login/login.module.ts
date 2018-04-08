import { NgModule }       from '@angular/core';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from "./login-routing.module";
import { WelcomeComponent } from "./welcome.component";
import { UserService } from '../user.service';
@NgModule({
  imports: [
   LoginRoutingModule,
  ],
  declarations: [
    LoginComponent,
    WelcomeComponent
  ]

})
export class LoginModule {}
