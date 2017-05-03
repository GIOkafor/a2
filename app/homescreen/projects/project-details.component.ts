import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Location} from '@angular/common';
import 'rxjs/add/operator/switchMap';

import {Projects} from './projects';
import {ProjectsService} from './projects.service';


@Component({
	moduleId: module.id,
	selector: 'project-details',
	templateUrl: 'project-details.component.html',
	styleUrls: ['project-details.component.css']
})

export class ProjectDetailsComponent implements OnInit{
	@Input() project: Projects;

	constructor(
		private projectsService: ProjectsService,
		private route: ActivatedRoute,
		private location: Location
	){}

	ngOnInit():void{
		this.route.params
			.switchMap((params: Params) => this.projectsService.getProject(+params['id']))
			.subscribe(project => this.project = project);
	}

	goBack(){
		this.location.back();
	}
}