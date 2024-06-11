import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from '../app/button.component';
import { MyInputComponent } from './my-input.component';
import { UserListComponent } from './user-list.component';
import { LiveHookListComponent } from './livehookList.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonComponent, MyInputComponent, UserListComponent, LiveHookListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  items: string[] = [];
  hooks: string[] = [];

  addItem(inputComponent: MyInputComponent) {
    const value = inputComponent.getValue().trim();
    if (value) {
      this.items.push(value);
      inputComponent.setValue('');
    }
  }
}
