import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from '../user.service';
import { Http, Headers, Response } from '@angular/http';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
  providers: [UserService]
})

export class LoginFormComponent implements OnInit{

  constructor(private router:Router, private user:UserService) {

  }
  ngOnInit() {
      // se sono autenticato ma torno indietro al login-form vengo disconnesso automaticamente
      this.user.isLogout();
	  this.router.navigate(['/']);
  }

  username: '';
  password : '';
  
  Accesso(event) {
    event.preventDefault();
	console.log(event); 
	
	this.user.isLoggedin(this.username,this.password).then((result) => {
         if(result)
			this.router.navigate(['dashboard/sondaggi']);
         else
			console.log(result);
		})
	}
	
}