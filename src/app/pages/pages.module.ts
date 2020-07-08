import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './dashboard/dashboard.component';
import {Graficas1Component} from './graficas1/graficas1.component';
import {ProgressComponent} from './progress/progress.component';
import {PagesComponent} from './pages.component';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import {PagesRoutesModule} from './pagesRoutesModule';


@NgModule({
  declarations: [


    PagesComponent,
    DashboardComponent,
    Graficas1Component,
    ProgressComponent,

  ],
  exports: [
    PagesComponent,
    DashboardComponent,
    Graficas1Component,
    ProgressComponent,
  ],
  imports: [
    PagesRoutesModule,
    CommonModule,
    SharedModule,
    RouterModule,
  ]
})
export class PagesModule {
}
