import {Injectable} from '@angular/core';
import {Industry} from './industry';
import {INDUSTRIES} from './mock-industries';

@Injectable()
export class IndustryService{
	getIndustries(): Promise<Industry[]>{
		return Promise.resolve(INDUSTRIES);
	}
}