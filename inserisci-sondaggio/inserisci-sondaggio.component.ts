import { Component } from '@angular/core';
import {SurveyService} from '../survey.service';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-inserisci-sondaggio',
  templateUrl: './inserisci-sondaggio.component.html',
  styleUrls: ['./inserisci-sondaggio.component.css'],
  providers: [SurveyService]
})
export class InserisciSondaggioComponent{
	
  titolo: '';
  data: '';
  stato:'';
  autore:'';

  constructor(private survey:SurveyService) {}

  inserisciSondaggio(titolo,data,stato,autore){

	this.survey.inserisciSondaggio(this.titolo,this.data,this.stato,this.autore).subscribe
		(result => {console.log(result);},
			error =>{ console.log('errore');}
		);
  }
}


