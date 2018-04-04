import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css'],
  providers: [AuthenticationService]
})
export class AuthenticationComponent implements OnInit {
  public user;

  constructor(public authService: AuthenticationService) {
    this.authService.user.subscribe(user => {this.user = user});
  }

  ngOnInit() {
  }

  login() {
    this.authService.loginGoogle();
  }

  logout() {
    this.authService.logout();
  }
}
