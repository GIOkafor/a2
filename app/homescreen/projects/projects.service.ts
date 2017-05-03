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

	//gets project by id
	getProject(id: number):Promise<Projects>{
		//TODO: query db for project by id
		//for now get all mock projects then check for the one with matching id
		return this.getProjects()
			.then(projects => projects.find(project => project.id === id));
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