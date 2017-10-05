import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent{
	
      constructor(private user:UserService, private router:Router){ 
	  
    }
 
	logout(){
		this.user.isLogout();
		this.router.navigate(['/']);
		console.log("logout effettuato");
		
	}
	
	
}

