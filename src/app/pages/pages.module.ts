import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './dashboard/dashboard.component';
import {Graficas1Component} from './graficas1/graficas1.component';
import {ProgressComponent} from './progress/progress.component';
import {PagesComponent} from './pages.component';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import {PagesRoutesModule} from './pagesRoutesModule';
import {FormsModule} from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

import {IncrementadorComponent} from '../components/incrementador/incrementador.component';
import {ChartDonnaComponent} from '../components/chart-donna/chart-donna.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';


@NgModule({
  declarations: [


    PagesComponent,
    IncrementadorComponent,
    DashboardComponent,
    Graficas1Component,
    ChartDonnaComponent,
    ProgressComponent,
    AccountSettingsComponent,

  ],
  exports: [
    PagesComponent,
    DashboardComponent,
    IncrementadorComponent,
    Graficas1Component,
    ProgressComponent,
  ],
  imports: [
    PagesRoutesModule,
    CommonModule,
    SharedModule,
    FormsModule,
    ChartsModule,
    RouterModule,

  ]
})
export class PagesModule {
}
