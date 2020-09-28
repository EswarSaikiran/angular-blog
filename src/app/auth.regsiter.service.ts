import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterPayLoad } from './register-payload';
import { Observable } from 'rxjs';
import { LoginPayload } from './login-payload';
import {map} from 'rxjs/operators';
import { Router } from '@angular/router';
@Injectable()
export class AuthService {
    private url = 'http://localhost:8080/';
    constructor(private httpClient: HttpClient,private route:Router){}

    logindata:LoginPayload;

    register(registerPayload: RegisterPayLoad): Observable<any> {
        return this.httpClient.post(this.url + 'adduser', registerPayload);
      }
      loginAuth(data: LoginPayload){
      //  sessionStorage.setItem('datalogin',JSON.stringify(data));
        return this.httpClient.post(this.url + 'login', data);
        
      }
       adimguard(id:string):boolean{
         if(id=='Admin'){
           return true;
         }
        }
         developerGuard(id:string):boolean{
          if(id=='Developer'){
            return true;
          }
         
        }
      isUserLoggedIn():boolean{
       const user=sessionStorage.getItem('datalogin');
        
       console.log(!(user === null));
       return !(user === null);
      }
      logOut() {
        sessionStorage.clear();
        localStorage.clear();
        location.reload();
      }
      
}
