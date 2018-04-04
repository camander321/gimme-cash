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
  public user;

  constructor(public authService: AuthenticationService) {
  this.authService.user.subscribe(user => {this.user = user});
 }

}
