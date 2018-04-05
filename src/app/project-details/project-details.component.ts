import { Component, OnInit, DoCheck } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Project } from '../models/project.model'
import { ProjectService } from '../project.service'
import { AuthenticationService } from '../authentication.service'

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css'],
  providers: [ProjectService, AuthenticationService]
})
export class ProjectDetailsComponent implements OnInit, DoCheck {

  projectId:string = '';
  currentProject:Project;
  private user;
  isOwner:boolean;

  constructor(
    private authService:AuthenticationService,
    private projectService:ProjectService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.projectId = urlParameters['id'];
    });
    this.projectService.getProjectFromKey(this.projectId).subscribe(data => {
      this.currentProject = new Project(data.name, data.description, data.fundGoal, data.type, data.owner);
    });
    this.authService.user.subscribe(user => {this.user = user});
    this.isOwner = false;
  }

  ngDoCheck() {
    this.isOwner = this.user != null && this.currentProject != null && this.user.displayName == this.currentProject.owner;
  }
}
