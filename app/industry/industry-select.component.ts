import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../user/user';
import {Industry} from './industry';
import {IndustryService} from './industry.service';
import {UserService} from '../user/user.service';

@Component({
	moduleId: module.id,
	selector: 'industry-select',
	templateUrl: 'industry-select.component.html',
	styleUrls: ['industry-select.component.css']
})

//TODO : 
export class IndustrySelect {
	industries: Industry[];
	user: User;

	constructor(private industryService: IndustryService, private userService: UserService) {}

	ngOnInit(){this.getIndustries();this.getUser();}

	getIndustries(): void{
		this.industryService.getIndustries().then(industries => this.industries = industries);
		console.log(this.industries);
	}

	getUser(): void{
		this.userService.getUser().then(user => this.user = user);
		console.log(this.user);
	}
}