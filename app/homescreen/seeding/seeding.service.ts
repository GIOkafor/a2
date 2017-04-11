import {Injectable} from '@angular/core';
import {Seeding} from './seeding';
import {SEEDING} from './mock-seeding';

@Injectable()
export class SeedingService {
	
	constructor() {
		// code...
	}

	//gets all seeding activity and returns array of seeding objects
	getSeedingActivity(): Promise<Seeding[]>{
		//TODO: Query server for SEEDING
		//return mock OBJECTS for now..
		return Promise.resolve(SEEDING);
	}
}