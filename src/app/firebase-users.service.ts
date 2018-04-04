import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from "angularfire2/database";

@Injectable()
export class FirebaseUsersService {

  constructor(private database: AngularFireDatabase) {
    database.list('users').subscribe(data => {console.log(data)});
  }

}
