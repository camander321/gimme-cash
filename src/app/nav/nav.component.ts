import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  providers: [AuthenticationService]
})
export class NavComponent implements OnInit {
public user;

constructor(public authService: AuthenticationService) {
  this.authService.user.subscribe(user => {this.user = user});
}
  ngOnInit() {
  }

}
