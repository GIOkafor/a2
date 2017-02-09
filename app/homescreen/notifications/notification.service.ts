import {Injectable} from '@angular/core';

import {Notification} from './notification';
import {NOTIFICATIONS} from './mock-notifications';

@Injectable()
export class NotificationService {
	
	constructor() {
		// code...
	}

	getNotifications(): Promise<Notification[]>{
		//TODO: Query server for notifications
		//return mock notifications for now..
		console.log('Notifications being returned are: ',NOTIFICATIONS);
		return Promise.resolve(NOTIFICATIONS);
	}

	getActivityCount(notifications:Notification[]){
		var total_activity_count = 0;

		for(var i = 0; i<notifications.length; i++){
			console.log(notifications[i].activity_count);
			total_activity_count += notifications[i].activity_count;
		}
	}
}