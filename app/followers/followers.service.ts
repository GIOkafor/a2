import {Injectable} from '@angular/core';
import {Followers} from './followers';
import {FOLLOWERS} from './mock-followers';

@Injectable()
export class FollowersService{
	getFollowers(): Promise<Followers[]>{
		return Promise.resolve(FOLLOWERS);
	}
}