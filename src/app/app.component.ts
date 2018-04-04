import { Component } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthenticationService]

})
export class AppComponent {
  user;
  userName: string;
  photoUrl: string;
  private isLoggedIn: Boolean;

  constructor(public authService: AuthenticationService) {
    // this.authService.user.subscribe(user =>  {
    //   if (user == null) {
    //     this.isLoggedIn = false;
    //   } else {
    //     this.isLoggedIn = true;
    //     this.userName = user.displayName;
    //     this.photoUrl = user.photoURL;
    //     console.log(user);
    //   }
    // });
  }

  ngDoCheck() {
    this.user = firebase.auth().currentUser;
    console.log(this.user);
  }

  login() {
    this.authService.loginGoogle();
  }

  logout() {
    this.authService.logout();
  }
}
