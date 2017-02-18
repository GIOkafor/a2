import {Injectable} from '@angular/core';
import {Projects} from './projects';
import {PROJECTS} from './mock-projects';

@Injectable()
export class ProjectsService {

	constructor() {
		// code...
	}

	//returns list of projects user is involved in 
	getProjects():Promise<Projects[]>{
		//TODO: Query server for notifications
		//return mock notifications for now..

		return Promise.resolve(PROJECTS);
	}

	//gets total activity count
	getActivityCount(projectNotifications:Projects[]): number{
		var activity_count = 0;

		for(var i = 0; i<2; i++){
			activity_count += projectNotifications[i].activity_count;
		}

		return activity_count;
	}
}