import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class SurveyService {

	constructor(private http: Http) { 
	}
	
	listaSondaggi(){
		return this.http.get('http://jsonplaceholder.typicode.com/posts')
		.map(list => list.json());
	}
	
	inserisciSondaggio(titolo,data,stato,autore){
		let headers = new Headers({ 'Content-Type': 'application/json' });
		return this.http.post('http://jsonplaceholder.typicode.com/posts', JSON.stringify({titolo,data,stato,autore}), { headers: headers })
		.map(dati => dati.json());       
    }
	
	deleteSurveyById(surveyId: string){
		let headers = new Headers({ 'Content-Type': 'application/json' });		
        return this.http.delete('http://jsonplaceholder.typicode.com/posts', { headers: headers })
	   .map(success => success.status)
	}
}
