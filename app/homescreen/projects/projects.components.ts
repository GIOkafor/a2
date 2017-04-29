import {Component, OnInit} from '@angular/core';
import {Projects} from './projects';
import {ProjectsService} from './projects.service';

@Component({
	moduleId: module.id,
	selector: 'projects',
	providers: [ProjectsService],
	templateUrl: 'projects.component.html',
	styleUrls: ['projects.component.css', '../feeds/feeds.component.css', '../homescreen.component.css']
})

export class ProjectsComponent{
	projects: Projects[];

	constructor(private projectsService: ProjectsService) {
		// code...
	}

	ngOnInit(): void{
		this.getProjects();
	}

	getProjects(){
		this.projectsService.getProjects()
			.then(projs => {
				console.log("Projects from service:", projs);
				this.projects = projs;
			})
			.catch(function(err){
				console.log(err);
			});
	}
}