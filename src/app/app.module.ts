import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmployeeCompComponent } from './employee-comp/employee-comp.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

import { DemoComponent } from './demo/demo.component';
import { Demo1Component } from './demo1/demo1.component';
import { Demo2Component } from './demo2/demo2.component';
import { Demo3Component } from './demo3/demo3.component'
import { MyService } from './my.service';
import { ReqresComponent } from './reqres/reqres.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeCompComponent,
    DemoComponent,
    Demo1Component,
    Demo2Component,
    Demo3Component,
    ReqresComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [
    // AppComponent,
    // EmployeeCompComponent,
    // DemoComponent
    ReqresComponent
  ]
})
export class AppModule { }
