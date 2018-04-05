import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../models/project.model'
import { ProjectService } from '../project.service'

@Component({
  selector: 'app-private-detail',
  templateUrl: './private-detail.component.html',
  styleUrls: ['./private-detail.component.css']
})
export class PrivateDetailComponent implements OnInit {
  @Input() currentProject: Project;
  @Input() currentProjectId: string;
  showForm:boolean = false;

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.showForm = false;
  }

  beginDeletingProject() {
    console.log(this.currentProjectId);
    if(confirm("Are you sure you want to delete this project?")){
    this.projectService.deleteProject(this.currentProjectId);
    }
  }

  showEditForm(){
    this.showForm = !this.showForm;
  }
}
