import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user.interface';
import { AuthService } from '../../services/authentication/auth.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public user: User[] = [];
  name = '';
  email = '';

  constructor(readonly authService: AuthService, readonly route: Router) { }

  ngOnInit() {
    this.user = this.authService.getUser();
    this.name = this.authService.getUserName();
    this.email = this.authService.getUserEmail();
  }

}
