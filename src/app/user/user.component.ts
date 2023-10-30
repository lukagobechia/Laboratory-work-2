import { Component, EventEmitter, Output } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
})
export class UserComponent {
  @Output() usersChange = new EventEmitter<User[]>();

  users: User[] = [];

  firstName: string = '';
  lastName: string = '';
  dateOfBirth: Date = new Date();
  phoneNumber: string = '';
  email: string = '';
  
  
  addUser(firstName: string, lastName: string, dateOfBirth: Date, phoneNumber: string, email: string) {
    const user: User = {
      firstName: firstName,
      lastName: lastName,
      dateOfBirth: new Date(dateOfBirth),
      phoneNumber: phoneNumber,
      email: email,
    };
    this.users.push(user);
  
    this.firstName = '';
    this.lastName = '';
  
    this.phoneNumber = '';
    this.email = '';
    this.usersChange.emit(this.users);
  }
  
  

}
