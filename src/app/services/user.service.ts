import { Injectable } from '@angular/core';

import { User } from '../models/user';
import { Observable, of} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[];
  data: Observable<any>;

  constructor() { 
    this.users = [
      {
        firstName: 'Sabbir',
        lastName: 'Anwar',
        email: 'abc@abc.com',
        isActive: false,
        registered: new Date('02/11/2016 06:20:00')
      },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'abdvac@abc.com',
        isActive: false,
        registered: new Date('02/05/2018 06:20:00')
      },
      {
        firstName: 'Dummy 02',
        lastName: 'xyz 02',
        email: 'sdfc@abc.com',
        isActive: false,
        registered: new Date('02/08/2016 06:20:00')
      },
      {
        firstName: 'Dummy 03',
        lastName: 'xyz 03',
        email: 'gdfsc@abc.com',
        isActive: true,
        registered: new Date('05/10/2016 06:20:00')
      }
    ];
  }

  getData(){
    this.data = new Observable(observer => {
      setTimeout(()=>{
        observer.next(1);
      },1000);

      setTimeout(()=>{
        observer.next(2);
      },1000);

      setTimeout(()=>{
        observer.next(3);
      },1000);

      setTimeout(()=>{
        observer.next(4);
      },1000);
    });

    return this.data;
  }

  getUsers(): Observable<User[]>{
    return of(this.users);
  }

  addUser(user: User){
    this.users.unshift(user);
  }
}
