import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { SidebarComponent } from './shared/components/sidebar.component';
import { SidebarItemsComponent } from './shared/components/sidebar-items/sidebar-items.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FollowBarComponent } from './shared/components/follow-bar/follow-bar.component';
import { AvatarComponent } from './shared/components/avatar/avatar.component';


@NgModule({
  declarations: [
    LayoutComponent,
    SidebarComponent,
    SidebarItemsComponent,
    HeaderComponent,
    FollowBarComponent,
    AvatarComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
