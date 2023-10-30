import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  users: User[] = [];

  onUsersChange(updatedUsers: User[]) {
    this.users = updatedUsers;
  }

}

