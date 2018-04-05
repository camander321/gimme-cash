import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';

import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NavComponent } from './nav/nav.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { ListProjectsComponent } from './list-projects/list-projects.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { PrivateDetailComponent } from './private-detail/private-detail.component';
import { PublicDetailComponent } from './public-detail/public-detail.component';
import { EditProjectComponent } from './edit-project/edit-project.component';
import { NgForm, NgModel, FormsModule } from '@angular/forms';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    NavComponent,
    NewProjectComponent,
    ListProjectsComponent,
    AuthenticationComponent,
    ProjectDetailsComponent,
    PrivateDetailComponent,
    PublicDetailComponent,
    EditProjectComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    routing,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
