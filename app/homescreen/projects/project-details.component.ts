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
	isAdmin: Boolean;
	selectedMember: number;
	whatTime: Date;

	constructor(
		private projectsService: ProjectsService,
		private route: ActivatedRoute,
		private location: Location
	){}

	ngOnInit():void{
		//TODO: check for actual admin status
		//for now set isAdmin to true
		this.isAdmin = true;

		this.route.params
			.switchMap((params: Params) => this.projectsService.getProject(+params['id']))
			.subscribe(project => this.project = project);
	}

	goBack(){
		this.location.back();
	}

	showHiddenMenu(i:number){
		console.log("Current selected is: ", this.selectedMember);
		if(this.selectedMember == i)
			this.selectedMember = -1;
		else
			this.selectedMember = i;
	
		this.whatTime = new Date();
	}
}