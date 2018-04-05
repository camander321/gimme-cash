import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from '../models/project.model'
import { NgForm, NgModel } from '@angular/forms';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css'],
  providers: [ProjectService]
})
export class EditProjectComponent implements OnInit {
  @Input() currentProject: Project;
  @Input() projectKey: string;
  @Output() clickSaveUpdate = new EventEmitter();

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
  }

  update() {
    this.projectService.updateProject(this.projectKey, this.currentProject);
  }

  hideUpdateForm(){
    console.log("here");
    this.clickSaveUpdate.emit();
  }
}
