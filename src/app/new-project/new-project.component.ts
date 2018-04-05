import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project.model'
import { ProjectService } from '../project.service'
import { AuthenticationService } from '../authentication.service'

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css'],
  providers: [ProjectService, AuthenticationService]
})
export class NewProjectComponent implements OnInit {
  public user;

  constructor(private projectService:ProjectService, private authService:AuthenticationService) { }

  ngOnInit() {
    this.authService.user.subscribe(user => {this.user = user});
  }

  create(name:string, desc:string, goal:string, type:string) {
    let newProject = new Project(name, desc, parseInt(goal), type, this.user.displayName);
    this.projectService.addProject(newProject);
  }
}
