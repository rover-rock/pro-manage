import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ClarityModule } from "@clr/angular";
import {ReactiveFormsModule,FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { Message } from "./message/message.component";
import { Test1Component } from "./examples/test1.component";
import { RegisterComponent } from "./register/register.component";
import { Register1Component } from "./register/register1.component";
import { InputDivComponent } from "./register/input-div.component";
import {  Register2Component } from "./register/register2.component";

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatMenuModule} from '@angular/material/menu';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
@NgModule({
  declarations: [
    AppComponent,
    Message,
    Test1Component,
    RegisterComponent,
    Register1Component,
    InputDivComponent,
    Register2Component,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    ClarityModule,
    MatMenuModule,
    MatStepperModule,
    MatFormFieldModule,
   ReactiveFormsModule,
   MatInputModule,
   FormsModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
