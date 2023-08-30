import { Component, Input } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent {
  @Input() showBackArrow: boolean = false;
  @Input() title: string = '';

  constructor(private router: Router) {
  }

  goBack() {
    this.router.navigate(['/']);
  }

}
