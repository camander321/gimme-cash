import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project.model'
import { ProjectService } from '../project.service'

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css'],
  providers: [ProjectService]
})
export class NewProjectComponent implements OnInit {

  constructor(private projectService:ProjectService) { }

  ngOnInit() {
  }

  create(name:string, desc:string, goal:string, type:string) {
    let newProject = new Project(name, desc, parseInt(goal), type);
    this.projectService.addProject(newProject);
  }

}
