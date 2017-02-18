import {Injectable} from '@angular/core';

import {Groups} from './groups';
import {GROUPS} from './mock-groups';

@Injectable()
export class GroupsService {
	
	constructor() {
		// code...
	}

	getNotifications(): Promise<Groups[]>{
		//TODO: Query server for notifications
		//return mock notifications for now..
		return Promise.resolve(GROUPS);
	}

	//TODO: Consider putting this to use
	//this doesn't get used atm, as it currently defers to the one in component
	getActivityCount(notifications:Groups[]){
		var total_activity_count = 0;

		for(var i = 0; i<notifications.length; i++){
			console.log(notifications[i].activity_count);
			total_activity_count += notifications[i].activity_count;
		}
	}
}