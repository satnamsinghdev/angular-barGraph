import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BarchartexampleComponent } from './barchartexample/barchartexample.component'; 
import {MatCardModule} from '@angular/material/card'; 
import { NgxChartsModule }from '@swimlane/ngx-charts';
import { ChartsModule } from 'ng2-charts';
import { ChartModule } from 'angular2-chartjs';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import { StartCompComponent } from './start-comp/start-comp.component'; 
@NgModule({
  declarations: [
    AppComponent,
    BarchartexampleComponent,
    StartCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    NgxChartsModule,
    ChartsModule,
    ChartModule,
    MatTableModule
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
