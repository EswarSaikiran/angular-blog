import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGaurdService } from './login-authguard-service';
import { TopicComponent } from './topic/topic.component';
import { ReadtopicsComponent } from './readtopics/readtopics.component';
import { TopictoadminComponent } from './topictoadmin/topictoadmin.component';
import { EditstatusbyadminComponent } from './editstatusbyadmin/editstatusbyadmin.component';
import { AuthGaurdServiceForRole } from './roleautehntication-service';
import { AuthGaurdServiceForDeveloperRole } from './developerRoleAuthentication-serice';
import { CommentontopicComponent } from './commentontopic/commentontopic.component';
import { ReadcommentsComponent } from './readcomments/readcomments.component';
import { ApprovedtopicsforadminComponent } from './approvedtopicsforadmin/approvedtopicsforadmin.component';
import { ReadCommentsByUserComponent } from './read-comments-by-user/read-comments-by-user.component';

const routes: Routes = [
  {
    path:'register',component:HomeComponent
  },{
  path:'login',component:LoginComponent
  },
  {
    path:'AddTopic',component:TopicComponent,canActivate:[AuthGaurdService,AuthGaurdServiceForDeveloperRole]
  },
  {
    path:'logout',component:LogoutComponent,canActivate:[AuthGaurdService]
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path:'ViewAllapprovedTopics',component:ReadtopicsComponent,canActivate:[AuthGaurdService,AuthGaurdServiceForDeveloperRole]
  },
  {
    path:'topictoAdmin',component:TopictoadminComponent,canActivate:[AuthGaurdService,AuthGaurdServiceForRole]
  },
  {
    path:'edit/:id',component:EditstatusbyadminComponent,canActivate:[AuthGaurdService]
  },{
    path:'AddTopic/:id',component:TopicComponent,canActivate:[AuthGaurdService,AuthGaurdServiceForDeveloperRole]
  },

  {
    path:'comment/:id',component:CommentontopicComponent,canActivate:[AuthGaurdService]
  },{
    path:'readcomments/:id',component:ReadcommentsComponent,canActivate:[AuthGaurdService]
  },
 {
   path:'approvedtopicsforadmin',component:ApprovedtopicsforadminComponent,canActivate:[AuthGaurdService]
 },
 {
   path:'readcommentsbyadmin/:id',component:ReadCommentsByUserComponent,canActivate:[AuthGaurdService]
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
