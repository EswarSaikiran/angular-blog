import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.regsiter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'forumsBlog';
  result:boolean ;
  constructor(private authService: AuthService){}
  ngOnInit(): void {
 this.result=  this.authService.isUserLoggedIn();
  }
  
}
