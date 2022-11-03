import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { TopBarComponent } from './widgets/top-bar/top-bar.component';
import { EmployeeBuilderComponent } from './components/employee-builder/employee-builder.component';

@NgModule({
  declarations: [AppComponent, EmployeeComponent, TopBarComponent, EmployeeBuilderComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
