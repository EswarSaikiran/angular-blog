import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.regsiter.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private authService:AuthService,private rout:Router) { }

  ngOnInit() {
    this.authService.logOut();
    this.rout.navigate(['login']);

  }

}
