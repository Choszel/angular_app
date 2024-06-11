import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-my-input',
  template: `<input [(ngModel)]="inputValue" placeholder="Type something...">`,
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class MyInputComponent {
  inputValue: string = '';
  getValue() {
    return this.inputValue;
  }

  setValue(value: string) {
    this.inputValue = value;
  }
}
