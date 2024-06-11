import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `<button (click)="handleClick()">Add</button>`,
  standalone: true,
})
export class ButtonComponent {
  @Output() click = new EventEmitter<void>();

  handleClick() {
    this.click.emit();
  }
}
