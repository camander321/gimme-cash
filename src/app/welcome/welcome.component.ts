import { Component, OnInit } from '@angular/core';
import { FirebaseUsersService } from '../firebase-users.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  providers: [FirebaseUsersService]
})
export class WelcomeComponent implements OnInit {

  constructor(private userService:FirebaseUsersService) { }

  ngOnInit() {
  }

}
