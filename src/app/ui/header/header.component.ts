import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/authentication/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isActive = false;
  userName = '';


  constructor(readonly route: Router, readonly authService: AuthService) { }

  ngOnInit(): void {
    this.isActive = this.authService.isAuthenticated();
    this.userName = this.authService.getUserName();
  }
}
