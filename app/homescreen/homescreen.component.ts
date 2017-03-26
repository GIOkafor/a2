import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../user/user';
import {Industry} from '../industry/industry';
import {IndustryService} from '../industry/industry.service';
import {UserService} from '../user/user.service';

import {GroupsService} from './groups/groups.service';
import {GroupsComponent} from './groups/groups.component';

import {ProjectsComponent} from './projects/projects.component';
import {ProjectsService} from './projects/projects.service';

import {FollowingComponent} from '../followers/following.component';
import {FollowingService} from '../followers/following.service';

@Component({
	moduleId: module.id,
	selector: 'homescreen',
	templateUrl: 'homescreen.component.html',
	styleUrls: ['homescreen.component.css'],
	providers: [
				GroupsComponent, 
				GroupsService, 
				ProjectsComponent, 
				ProjectsService, 
				FollowingComponent, 
				FollowingService
				]
})

export class HomeScreen {
	
	constructor(private industryService: IndustryService, private userService: UserService) {
		console.log("Homescreen constructor fired");
	}
}