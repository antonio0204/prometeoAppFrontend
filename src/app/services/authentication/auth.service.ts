import { Injectable } from '@angular/core';
import { Bank } from '../../models/model.interface';
import { User } from '../../models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  bank = '';
  email = '';
  password = '';

  readonly banks: Bank[] = [
    {
      id: 1,
      name: 'Bancolombia'
    },
    {
      id: 2,
      name: 'Occidente'
    },
    {
      id: 3,
      name: 'Aval'
    }
  ];

  readonly users: User[] = [
  {
    id: 1,
    name: 'ronald',
    email: 'ronaldaguirre0204@gmail.com',
    password: '123456'
  },
  {
    id: 2,
    name: 'fernanda',
    email: 'fernandac_ortizv@hotmail.com',
    password: '123456'
  },
  {
    id: 3,
    name: 'juan',
    email: 'juanjose@gmail.com',
    password: '123456'
  }
  ];

  constructor() {}


  getBank(): Bank[] {
    return this.banks;
  }

  getUser(): User[] {
    return this.users;
  }
  getUserName(): any {
    for (const user of this.users) {
      if (user.email === this.email && user.password === this.password) {
        return user.name;
      }
    }
  }
  getUserEmail(): any {
    for (const user of this.users) {
      if (user.email === this.email && user.password === this.password) {
        return user.email;
      }
    }
  }
  dataLogin(data: any){
    this.bank = data.listBancos;
    this.email = data.email;
    this.password = data.password;
  }

  isAuthenticated(): any {
    for (const user of this.users) {
      if (user.email === this.email && user.password === this.password) {
        return true;
      }
    }
  }

}


