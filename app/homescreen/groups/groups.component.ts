import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {Groups} from './groups';
import {GroupsService} from './groups.service';

@Component({
	moduleId: module.id,
	selector: 'groups',
	templateUrl: 'groups.component.html',
	styleUrls: ['groups.css'],
	exportAs: 'groups',
	providers: [GroupsService]
})

export class GroupsComponent {
	//notification_count
	notifications: Groups[];
	activity_count: number;

	constructor(private notificationService:GroupsService) {
		// code...
	}

	ngOnInit():void{this.getNotifications();}

	getNotifications(): void{
		this.notificationService.getNotifications()
		.then(notifications => {
			console.log('Notifications gotten from service are', notifications);
			this.notifications = notifications;
		
			this.getActivityCount(notifications);
		})
	
		.catch(function(err){
			console.log(err);
		});
	}

	getActivityCount(notifications:Groups[]): void{
		this.activity_count = 0;

		for(var i = 0; i<2; i++){
			this.activity_count += notifications[i].activity_count;
		}
	}
}