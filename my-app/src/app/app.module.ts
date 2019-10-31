import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { HighlightDirective } from './highlight.directive';
import { StudentsComponent } from './students/students.component';
import { StaffComponent } from './staff/staff.component';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { InMemoryStudentService } from './app-in-memory-web-api';
@NgModule({
  declarations: [
    AppComponent,

    HighlightDirective,

    StudentsComponent,

    StaffComponent,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryStudentService)
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
