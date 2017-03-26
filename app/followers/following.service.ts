import {Injectable} from '@angular/core';
import {Following} from './following';
import {FOLLOWING} from './mock-following';

@Injectable()
export class FollowingService{
	getFollowing(): Promise<Following[]>{
		return Promise.resolve(FOLLOWING);
	}
}