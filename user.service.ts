import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()

export class UserService {
	
  public loggedIn: boolean;

  constructor(private http: Http) {

  }

  isLoggedin(username: string, password: string) {
	this.loggedIn = false;
    let headers = new Headers({'Content-Type': 'application/json'}); 
	
	return new Promise((resolve) => {	
        this.http.post('http://jsonplaceholder.typicode.com/posts', JSON.stringify({ username, password }), {headers:headers}).subscribe((data) => {
            console.log(data);
			if(!data.json().success) {
                localStorage.setItem('auth_key', data.json());
                this.loggedIn = true;
				}
                resolve(this.loggedIn)
            }
        )   
    })
    
  }

  isLogout(){
		localStorage.removeItem('auth_key');
  }
  
}