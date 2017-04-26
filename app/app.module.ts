import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }      from '@angular/forms';

import { AppComponent }  from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HomeScreenModule} from './homescreen/homescreen.module';

import{ HeroDetailComponent } from './hero-detail.component';
import{ HeroesComponent } from './heroes.component';
import {HeroService} from './hero.service';
import {DashboardComponent} from './dashboard.component';

import {LoginFormComponent} from './login/login-form.component';
import {IndustrySelect} from './industry/industry-select.component';
//import {HomeScreen} from './homescreen/homescreen.component';

import {IndustryService} from './industry/industry.service';
import {UserService} from './user/user.service';

import {PageNotFoundComponent} from './page-not-found.component';

@NgModule({
  imports:      [ 
  	BrowserModule, 
  	FormsModule,
    HomeScreenModule,//putting this before AppRoutingModule lets it check the routes in this file first before matching the wildcard
  	AppRoutingModule
  	],
  declarations: [ 
  	AppComponent,
    DashboardComponent,
  	HeroDetailComponent,
  	HeroesComponent,
    LoginFormComponent,
    IndustrySelect,
    PageNotFoundComponent
  ],
  providers: [HeroService, IndustryService, UserService],
  bootstrap:    [ AppComponent ]
})


export class AppModule { }
