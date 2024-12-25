import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { percentage } from './percentage.pipe';
import { ucase } from './ucase.pipe';
import { tcase } from './tcase.pipe';
import { filterStudent } from './filterStudent.pipe';
import { FormsModule, NgForm } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    percentage,
    ucase,
    tcase,
    filterStudent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
