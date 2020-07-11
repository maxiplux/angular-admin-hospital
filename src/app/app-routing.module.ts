import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {NopagefoundComponent} from './shared/nopagefound/nopagefound.component';
import {RegisterComponent} from './login/register.component';


const routes: Routes = [
  // {path: '', redirectTo: '/dashboard', pathMatch: 'fulll'},


  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: '**', component: NopagefoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
