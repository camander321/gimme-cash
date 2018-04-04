import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from "angularfire2/database";

import { Project } from './models/project.model'

@Injectable()
export class ProjectService {

  projects: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.projects = database.list('gimmeCash/projects');
  }

  addProject(project:Project) {
    this.projects.push(project);
  }

  getProjectFromKey(key) {
    return this.database.object('gimmeCash/projects/' + key);;
  }
}
