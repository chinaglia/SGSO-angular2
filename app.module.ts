import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardGuard } from './authguard.guard';  			
import {UserService} from './user.service';
import { SondaggiComponent } from './sondaggi/sondaggi.component';
import {SurveyService} from './survey.service';
import { FooterComponent } from './footer/footer.component';
import { InserisciSondaggioComponent } from './inserisci-sondaggio/inserisci-sondaggio.component';
import { ProfileComponent } from './profile/profile.component';

const appRoutes:Routes = [
  {
    path: '',
    component: LoginFormComponent
  }, 
  {
    path: 'dashboard',
    canActivate: [AuthguardGuard],  //per impedire accessi a utenti non autorizzati
    component: DashboardComponent
  },
  {
    path: 'dashboard/sondaggi',
    component: SondaggiComponent,
	canActivate: [AuthguardGuard], 
  },
  {
	path: 'dashboard/sondaggi/inserisci-sondaggio',
    component: InserisciSondaggioComponent,
	canActivate: [AuthguardGuard], 
  },
  {
	path: 'dashboard/profile',
    component: ProfileComponent,
	canActivate: [AuthguardGuard], 
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginFormComponent,
    DashboardComponent,
    SondaggiComponent,
    FooterComponent,
    InserisciSondaggioComponent,
    ProfileComponent,	
  ],
  imports: [RouterModule.forRoot(appRoutes),
    BrowserModule,HttpModule,FormsModule
  ],
  providers: [UserService, AuthguardGuard,SurveyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
