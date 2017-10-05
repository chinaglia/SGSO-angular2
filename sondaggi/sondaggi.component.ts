import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from '../user.service';
import {SurveyService} from '../survey.service';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-sondaggi',
  templateUrl: './sondaggi.component.html',
  styleUrls: ['../dashboard/dashboard.component.css','./sondaggi.component.css'],
  providers: [SurveyService,UserService]
})
export class SondaggiComponent implements OnInit{

    constructor(private user:UserService, private router:Router, private survey:SurveyService){    
    }

	public sondaggi: any;
	//public spuntati: sondaggi;
	private selectedItem: boolean = false;	
	//singleChecked: boolean = false;	
	
	ngOnInit(){
		this.listaSondaggiComponent();
		
	}
	
	listaSondaggiComponent(){
		this.survey.listaSondaggi().subscribe((result) => {				
			this.sondaggi = result;
			console.log(this.sondaggi[1].body);  //prova
		},
		error =>{
			console.log("errore");
		}
		)
	}
	
	selezionaTutto(){
		if(this.selectedItem)
			this.selectedItem = true
		else 
			this.selectedItem = false;
	}
	
	
	
	
	logout(){
		this.user.isLogout();
		this.router.navigate(['/']);
		console.log("logout effettuato");
	}
}
