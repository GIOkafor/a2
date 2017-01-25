import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }      from '@angular/forms';

import { AppComponent }  from './app.component';
import{ HeroDetailComponent } from './hero-detail.component';
import{ HeroesComponent } from './heroes.component';
import {HeroService} from './hero.service';
import {DashboardComponent} from './dashboard.component';

import {LoginFormComponent} from './login/login-form.component';
import {IndustrySelect} from './industry/industry-select.component';
import {IndustryService} from './industry/industry.service';
import {UserService} from './user/user.service';

import {AppRoutingModule} from './app-routing.module';

@NgModule({
  imports:      [ 
  	BrowserModule, 
  	FormsModule,
  	AppRoutingModule
  	],
  declarations: [ 
  	AppComponent,
    DashboardComponent,
  	HeroDetailComponent,
  	HeroesComponent,
    LoginFormComponent,
    IndustrySelect
  ],
  providers: [HeroService, IndustryService, UserService],
  bootstrap:    [ AppComponent ]
})


export class AppModule { }
