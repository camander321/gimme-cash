import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Project } from '../models/project.model'
import { ProjectService } from '../project.service'

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css'],
  providers: [ProjectService]
})
export class ProjectDetailsComponent implements OnInit {

  projectId:string = '';
  currentProject:Project;

  constructor(private projectService:ProjectService, private route: ActivatedRoute, private location: Location) {
  }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.projectId = urlParameters['id'];
    });
    this.projectService.getProjectFromKey(this.projectId).subscribe(data => {
      this.currentProject = new Project(data.name, data.description, data.fundGoal, data.type);
    });
  }

}
