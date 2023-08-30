import { Component, Input } from '@angular/core';

@Component({
  selector: 'Avatar',
  templateUrl: './avatar.component.html',
  styles: [
  ]
})
export class AvatarComponent {
  @Input() userId: string = '';
  @Input() isLarge: boolean = false;
  @Input() hasBorder: boolean = false;
}
