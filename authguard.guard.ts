import { Injectable } from '@angular/core';
import { CanActivate} from '@angular/router';
import {UserService} from './user.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthguardGuard implements CanActivate {
	
  constructor(private user: UserService, private router:Router) {}

   canActivate() {
    if(localStorage.getItem('auth_key')) { 
      return true;
    } else {
	  this.router.navigate(['/']);
      console.log("non sei autorizzato");
      return false;
    }
   }
   
}