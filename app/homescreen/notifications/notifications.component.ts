import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {Notification} from './notification';
import {NotificationService} from './notification.service';

@Component({
	moduleId: module.id,
	selector: 'notifications',
	templateUrl: 'notifications.component.html',
	styleUrls: ['notification.css'],
	exportAs: 'notifications',
	providers: [NotificationService]
})

export class NotificationComponent {
	//notification_count
	notifications: Notification[];
	activity_count: number;

	constructor(private notificationService:NotificationService) {
		// code...
	}

	ngOnInit():void{this.getNotifications();}

	getNotifications(): void{
		this.notificationService.getNotifications()
		.then(notifications => {
			console.log('Notifications gotten from service are', notifications);
			this.notifications = notifications;
		
			this.getActivityCount(notifications);

			//TODO: Remove logging messages
			console.log('Notifications are', this.notifications);
			console.log('Activity count is', this.activity_count);
		})
	
		.catch(function(err){
			console.log(err);
		});
	}

	getActivityCount(notifications:Notification[]): void{
		this.activity_count = 0;

		for(var i = 0; i<2; i++){
			this.activity_count += notifications[i].activity_count;
		}
	}
}