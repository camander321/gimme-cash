import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project.model'
import { ProjectService } from '../project.service'
import { FirebaseListObservable } from "angularfire2/database";
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-projects',
  templateUrl: './list-projects.component.html',
  styleUrls: ['./list-projects.component.css'],
  providers: [ProjectService]
})
export class ListProjectsComponent implements OnInit {

  projects:FirebaseListObservable<any[]>;

  constructor(private router: Router, private projectService:ProjectService) { }

  ngOnInit() {
    this.projects = this.projectService.projects;
  }

  goToDetailPage(key:string) {
    this.router.navigate(['projects', key]);
  };
}
