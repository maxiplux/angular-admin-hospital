import {RouterModule, Routes} from '@angular/router';
import {PagesComponent} from './pages.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ProgressComponent} from './progress/progress.component';
import {Graficas1Component} from './graficas1/graficas1.component';
import {AccountSettingsComponent} from './account-settings/account-settings.component';
import {PromesasComponent} from './promesas/promesas.component';
import {MyrxComponent} from './myrx/myrx.component';


export const GLOBAL_ROUTES: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {path: 'dashboard', data: {titulo: 'El Mega DashBoard'}, component: DashboardComponent},
      {path: 'progress', data: {titulo: 'El Mega progress'}, component: ProgressComponent},
      {path: 'graficas1', data: {titulo: 'El Mega graficas'}, component: Graficas1Component},
      {path: 'promesas', data: {titulo: 'El Mega promesas'}, component: PromesasComponent},
      {path: 'rx', data: {titulo: 'El Mega titulo'}, component: MyrxComponent},
      {path: 'account-settings', data: {titulo: 'El Mega account settings'}, component: AccountSettingsComponent},

      {path: '', redirectTo: '/dashboard', pathMatch: 'full'}
    ]
  },
];
export const PagesRoutesModule = RouterModule.forChild(GLOBAL_ROUTES);
