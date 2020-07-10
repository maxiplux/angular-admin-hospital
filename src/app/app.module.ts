import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './login/register.component';
import {PagesModule} from './pages/pages.module';
import {SharedModule} from './shared/shared.module';

import {FormsModule} from '@angular/forms';
import { ChartDonnaComponent } from './components/chart-donna/chart-donna.component';
import {ChartsModule} from 'ng2-charts';


@NgModule({
  declarations: [

    AppComponent,
    LoginComponent,
    RegisterComponent




  ],
  imports: [
    BrowserModule,
    SharedModule,
    PagesModule,
    FormsModule,
    AppRoutingModule,

  ],
  providers: [],
  exports: [


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
