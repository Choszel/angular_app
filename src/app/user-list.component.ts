import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-list',
  template: `
    <ul>
      <li *ngFor="let item of items">{{ item }}</li>
    </ul>
  `,
  standalone: true,
  imports: [CommonModule],
})
export class UserListComponent {
  @Input() items: string[] = [];
}
