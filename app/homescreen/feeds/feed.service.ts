import {Injectable} from '@angular/core';
import {FEEDS} from './mock-feeds';
import {Feed} from './feed';

@Injectable()
export class FeedService {
	
	constructor() {
		// code...
	}

	//gets all posts and returns array of posts objects
	getFeedActivity(): Promise<Feed[]>{
		//TODO: Query server for posts
		//return mock posts for now..
		return Promise.resolve(FEEDS);
	}
}