import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeViewComponent } from './pages/employee-view/employee-view.component';
import { NewEmployeeComponent } from './pages/new-employee/new-employee.component';
import { EditemployeeComponent } from './pages/editemployee/editemployee.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeViewComponent,
    NewEmployeeComponent,
    EditemployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
