import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../user/user';
import {Industry} from '../industry/industry';
import {IndustryService} from '../industry/industry.service';
import {UserService} from '../user/user.service';
import {NotificationService} from './notifications/notification.service';
import {NotificationComponent} from './notifications/notifications.component';

@Component({
	moduleId: module.id,
	selector: 'homescreen',
	templateUrl: 'homescreen.component.html',
	styleUrls: ['homescreen.component.css'],
	providers: [NotificationComponent, NotificationService]
})

export class HomeScreen {
	
	constructor(private industryService: IndustryService, private userService: UserService) {
		console.log("Homescreen constructor fired");
	}
}