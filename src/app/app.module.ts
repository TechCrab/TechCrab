import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import {MatCardModule} from '@angular/material/card';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PracticeComponent } from './practice/practice.component';
import { AboutComponent } from './about/about.component';
import { HomePage } from './home/home.page';
import { ContactComponent } from './contact/contact.component';
import { FormsComponent } from './forms/forms.component';
import {  ReactiveFormsModule,FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JoblComponent } from './jobl/jobl.component';
import {MatSelectModule} from '@angular/material/select'
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { JoblistComponent } from './joblist/joblist.component';
import { WelcomeComponent } from './welcome/welcome.component';


@NgModule({
  declarations: [AppComponent,
  PracticeComponent,AboutComponent,HomePage,ContactComponent,FormsComponent,JoblComponent,JoblistComponent,WelcomeComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,ReactiveFormsModule,FormsModule, BrowserAnimationsModule,MatSelectModule,MatDatepickerModule,MatFormFieldModule,MatButtonModule,MatCardModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
