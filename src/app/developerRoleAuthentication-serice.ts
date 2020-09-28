import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from './auth.regsiter.service';
import { Injectable } from '@angular/core';
import { LoginPayload } from './login-payload';
@Injectable()
export class AuthGaurdServiceForDeveloperRole implements CanActivate {
 logindata:LoginPayload;
 result:Boolean;
    constructor(private router: Router, private authService: AuthService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

      const user=sessionStorage.getItem('datalogin');
      this.logindata= JSON.parse(user);
     this.result= this.authService.developerGuard(this.logindata.userType);

       // if(user['userType']='Admin'){
       //     this.route.navigate(['topictoAdmin']);
       //   }else
       //   this.route.navigate([''])

       if(this.result){
         return true;
       }
      return false;

    }

}

















 //     // this.authService.loginAuth(this.logindata).subscribe(
    //     //     data=>{
    //     //         if(this.logindata.userType==)
    //     //     }
    //     // )
    //     const user=sessionStorage.getItem('datalogin');

    //  //  let data= JSON.parse(user);
    //   // const keys=Object.keys(this.logindata);
    //   const values=Object.values(this.logindata);
      
    //   //  for(let i=0;i<sessionStorage.length;i++){
    //         if(sessionStorage.key["userType"]=="Developer"){
    //             return true;
    //         }
    //    // }