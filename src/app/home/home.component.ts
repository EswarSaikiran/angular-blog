import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RegisterPayLoad } from '../register-payload';
import { AuthService } from '../auth.regsiter.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registerForm: FormGroup;
  registerPayload: RegisterPayLoad;
  userTypes:Array<String>=['Developer'];
  constructor(private formBuilder:FormBuilder,private authService:AuthService,private route:Router) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      userType:['',Validators.required],
      username: ['',[Validators.required,Validators.pattern('^[a-zA-Z][a-zA-Z\\s]+$')]],
      email: ['',[Validators.required,Validators.pattern('([a-zA-Z0-9_.-]+)@([a-zA-Z]+)([\.])([a-zA-Z]+)')]],
      password: ['',[Validators.required,Validators.pattern('^[a-zA-Z][a-zA-Z0-9\\s]+$')]]

      
    });
    this.registerPayload = {
      userId:null,
      username: '',
      emailId: '',
      password: '',
      userType: ''
    };
  }
  onSubmit(){
    this.registerPayload.username = this.registerForm.get('username').value;
    this.registerPayload.emailId = this.registerForm.get('email').value;
    this.registerPayload.password = this.registerForm.get('password').value;
    this.registerPayload.userType = this.registerForm.get('userType').value;

    this.authService.register(this.registerPayload).subscribe(data=>
      {
      console.log('registrationsucess');
      this.route.navigate(['login']);
      },
      err=>
      {
        console.log("registration-failed");
      }
      );
    
  }
  // login(){
  //   this.route.navigate(['']);

  // }
}
