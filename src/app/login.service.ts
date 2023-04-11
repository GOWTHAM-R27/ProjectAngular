import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
isLoggedIn:boolean=false;
email:any="";
password:any="";

constructor() { }
 login(email:string,password:string){
  this.email= email;
  this.password= password;
  this.isLoggedIn=true;
  return of(this.isLoggedIn);
}
isUserLoggedIn():boolean{
  return this.isLoggedIn;
}
logoutUser():void{
  this.isLoggedIn=false;
}

}
