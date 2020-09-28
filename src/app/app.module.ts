import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from '@angular/common/http';
import { AuthService } from './auth.regsiter.service';
import { LogoutComponent } from './logout/logout.component';
import { AuthGaurdService } from './login-authguard-service';
import { TopicComponent } from './topic/topic.component';
import {TopicService} from './topic-service';
import { CommentontopicComponent } from './commentontopic/commentontopic.component';
import { ReadtopicsComponent } from './readtopics/readtopics.component';
import { TopictoadminComponent } from './topictoadmin/topictoadmin.component';
import { EditstatusbyadminComponent } from './editstatusbyadmin/editstatusbyadmin.component';
import {AuthGaurdServiceForRole} from './roleautehntication-service';
import {AuthGaurdServiceForDeveloperRole} from './developerRoleAuthentication-serice';
import { ReadcommentsComponent } from './readcomments/readcomments.component';
import { ApprovedtopicsforadminComponent } from './approvedtopicsforadmin/approvedtopicsforadmin.component';
import { ReadCommentsByUserComponent } from './read-comments-by-user/read-comments-by-user.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    LogoutComponent,
    TopicComponent,
    CommentontopicComponent,
    ReadtopicsComponent,
    TopictoadminComponent,
    EditstatusbyadminComponent,
    ReadcommentsComponent,
    ApprovedtopicsforadminComponent,
    ReadCommentsByUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [AuthService,AuthGaurdService,TopicService,AuthGaurdServiceForRole,AuthGaurdServiceForDeveloperRole],
  bootstrap: [AppComponent]
})
export class AppModule { }
