import {Component, OnInit} from '@angular/core';
import {Projects} from './projects';
import {PROJECTS} from './mock-projects';
import {ProjectsService} from './projects.service';

declare var moment: any;

@Component({
	moduleId: module.id,
	selector: 'project-notifications',
	providers: [ProjectsService],
	templateUrl: 'project-notifications.component.html',
	styleUrls: ['project-notifications.component.css', '../groups/groups.css'],
	exportAs: 'project-notifications'
})

export class ProjectNotificationsComponent {
	//properties
	projectNotifications:Projects[];
	activity_count:number;
	days_away:number;
	current_date: Date;

	constructor(private projectsService:ProjectsService) {
		
	}

	//run this upon initialization
	//get project notifications
	ngOnInit():void{
		this.getProjects();
	}

	//make call to service for project notifications
	getProjects(){
		console.log('Getting project notifications...');

		this.projectsService.getProjects()
		.then(projectNotifications => {
			console.log('Notifications gotten from service are', projectNotifications);

			this.projectNotifications = projectNotifications;
			this.activity_count = this.projectsService.getActivityCount(projectNotifications);
		})

		.catch(function(err){
			console.log(err);
		});
	}

	//figures out days till end of project
	getDaysAway(project:Projects){
		this.current_date = new Date();

		var d1 = moment(this.current_date);
		var d2 = moment(project.project_end_date);

		var days = moment.duration(d1.diff(d2)).asDays();
	}

}