import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NopagefoundComponent} from './nopagefound/nopagefound.component';
import {HeaderComponent} from './header/header.component';
import {BreadcrumbsComponent} from './breadcrumbs/breadcrumbs.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {SidebarRightComponent} from './sidebar-right/sidebar-right.component';
import {FooterComponent} from './footer/footer.component';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [

    NopagefoundComponent,
    HeaderComponent,
    BreadcrumbsComponent,
    SidebarComponent,
    SidebarRightComponent,
    FooterComponent,
  ],
  exports: [
    NopagefoundComponent,
    HeaderComponent,
    BreadcrumbsComponent,
    SidebarComponent,
    SidebarRightComponent,
    FooterComponent,
  ],
  imports: [
    RouterModule,
    CommonModule
  ]
})
export class SharedModule {
}
