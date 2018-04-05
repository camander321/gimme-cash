
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListProjectsComponent } from './list-projects/list-projects.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { EditProjectComponent } from './edit-project/edit-project.component';

const appRoutes: Routes = [
  {
    path: '',
    component: ListProjectsComponent
  },
  {
    path: 'projects/:id',
    component: ProjectDetailsComponent
  },
  {
    path: 'addProject',
    component: NewProjectComponent
  },
  {
    path: 'projects/:id/update',
    component: EditProjectComponent
  }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
