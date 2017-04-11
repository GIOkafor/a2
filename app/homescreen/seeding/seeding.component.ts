import {Component} from '@angular/core';
import {Seeding} from './seeding';
import {SeedingService} from './seeding.service';

@Component({
	moduleId: module.id,
	selector: 'seeding',
	templateUrl: 'seeding.component.html',
	styleUrls: ['seeding.component.css'],
	providers: [SeedingService]
})

export class SeedingComponent {
	seeding_activity: Seeding[];

	constructor(private seedingService: SeedingService) {
		console.log("Seeding component constructor fired");
	}

	ngOnInit():void{
		this.getSeedingActivity();
	}

	getSeedingActivity(){
		this.seedingService.getSeedingActivity()
		.then(seeding_objects => {
			console.log('Seeding from service: ', seeding_objects);
			this.seeding_activity = seeding_objects;
		})

		.catch(function(err){
			console.log(err);
		});
	}
}