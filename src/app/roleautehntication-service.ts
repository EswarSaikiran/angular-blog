import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from './auth.regsiter.service';
import { Injectable } from '@angular/core';
import { LoginPayload } from './login-payload';
@Injectable()
export class AuthGaurdServiceForRole implements CanActivate {
 logindata:LoginPayload;
 result:boolean;
    constructor(private router: Router, private authService: AuthService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        // this.authService.loginAuth(this.logindata).subscribe(
        //     data=>{
        //         if(this.logindata.userType==)
        //     }
        // )
        const user=sessionStorage.getItem('datalogin');
       this.logindata= JSON.parse(user);
      this.result= this.authService.adimguard(this.logindata.userType);

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