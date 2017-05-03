import {Component, OnInit} from '@angular/core';
import {ProjectsService} from './projects.service';

@Component({
	moduleId: module.id,
	selector: 'projects-home',
	templateUrl: 'projects-home.component.html',
	styleUrls: ['projects.component.css', '../feeds/feeds.component.css', '../homescreen.component.css'],
	providers: []
})

export class ProjectsHomeComponent {
	
	constructor(private projectsService:ProjectsService) {
		// code...
	}
}