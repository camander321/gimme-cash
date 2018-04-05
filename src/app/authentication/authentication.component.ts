import { Component, OnInit, DoCheck } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css'],
  providers: [AuthenticationService]
})
export class AuthenticationComponent implements OnInit, DoCheck {
  public user;

  constructor(public authService: AuthenticationService) {

  }

  ngOnInit() {
      this.authService.user.subscribe(user => {
        if (user != null && user.displayName == 'logmannn')
          throw('Go Away Logan');
        this.user = user;
      });
  }

  ngDoCheck() {
    // this.user = firebase.auth().currentUser;
    // console.log(this.user)
  }

  googleLogin() {
    this.authService.loginGoogle();
  }

  githubLogin() {
    this.authService.loginGithub();
  }

  logout() {
    this.authService.logout();
  }
}
