import { Component } from '@angular/core';
import { SideBarItems } from "../../../interface";

@Component({
  selector: 'sidebar-items',
  templateUrl: './sidebar-items.component.html',
  styles: [
  ]
})
export class SidebarItemsComponent {
  sidebarItems: Array<SideBarItems> = [
    {
      label: 'Home',
      route: '/',
      icon: 'home',
      isActive: true
    },
    {
      label: 'Notifications',
      route: '/notifications',
      icon: 'notifications'
    }
  ]
}
