import { Component, Output, EventEmitter } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  @Output() usersChange = new EventEmitter<any>();

  users: User[] = [];
  FirstName = '';
  LastName = '';
  DateOfBirth!: Date;
  PhoneNumber = '';
  Email = '';

  addUser() {
    const user: User = {
      firstName: this.FirstName,
      lastName: this.LastName,
      dateOfBirth: this.DateOfBirth,
      phoneNumber: this.PhoneNumber,
      email: this.Email,
    }
    if (this.FirstName != "" && this.LastName != "" && this.Email != "")
      this.users.push(user);
    // Reset values
    this.FirstName = '';
    this.LastName = '';
    this.DateOfBirth = new Date();
    this.PhoneNumber = '';
    this.Email = '';

    this.usersChange.emit(this.users);
  }
}
