import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginPayload } from '../login-payload';
import { AuthService } from '../auth.regsiter.service';
import { Router, ActivatedRoute } from '@angular/router';
import { RegisterPayLoad } from '../register-payload';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userid: number;
  loginForm: FormGroup;
  loginPayload: LoginPayload;
  registration: RegisterPayLoad;
  userTypes: Array<String> = ['Developer', 'Admin'];
  constructor(private authservice: AuthService, private route: Router,private activatedRoute:ActivatedRoute) {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      userType: new FormControl('', Validators.required),
    });
    this.loginPayload = {
      username: '',
      password: '',
      userType: ''
    };
  }


  ngOnInit() {
  }

  onSubmit() {
    this.loginPayload.username = this.loginForm.get('username').value;
    this.loginPayload.password = this.loginForm.get('password').value;
    this.loginPayload.userType = this.loginForm.get('userType').value;
    this.authservice.loginAuth(this.loginPayload).subscribe(data => {
      //if (data) {
      console.log('login success');
      sessionStorage.setItem('datalogin', JSON.stringify(data));

      //  localStorage.setItem('username', JSON.stringify(data));
      const user = sessionStorage.getItem('datalogin');
      this.registration = JSON.parse(user);
      if (this.authservice.developerGuard(this.registration.userType)) {
    //  this.userid = +this.activatedRoute.snapshot.paramMap.get('id');
        this.route.navigate(['AddTopic']);
      }
      else {
        
        this.route.navigate(['topictoAdmin']);
      }
    }, err => {
      console.log("login failed"),
      alert("login failed");
    });
  }
  // register(){
  //   this.route.navigate(['register']);
  // }

}
