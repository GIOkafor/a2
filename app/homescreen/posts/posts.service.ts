import {Injectable} from '@angular/core';
import {POSTS} from './mock-posts';
import {Post} from './post';

@Injectable()
export class PostService {
	
	constructor() {
		// code...
	}

	//gets all posts and returns array of posts objects
	getPosts(): Promise<Post[]>{
		//TODO: Query server for posts
		//return mock posts for now..
		return Promise.resolve(POSTS);
	}
}