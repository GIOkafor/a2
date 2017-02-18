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
import {HomeScreen} from './homescreen/homescreen.component';

import {IndustryService} from './industry/industry.service';
import {UserService} from './user/user.service';
import {PostService} from './homescreen/posts/posts.service';
import {GroupsComponent} from './homescreen/groups/groups.component';

import {ProjectsComponent} from './homescreen/projects/projects.component';

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
    IndustrySelect,
    HomeScreen,
    GroupsComponent,
    ProjectsComponent
  ],
  providers: [HeroService, IndustryService, UserService, PostService],
  bootstrap:    [ AppComponent ]
})


export class AppModule { }
