import {Component, OnInit} from '@angular/core';
import {Post} from './post';
import {PostService} from './posts.service';

@Component({
	moduleId: module.id,
	selector: 'posts',
	templateUrl: 'posts.component.html',
	styleUrls: ['posts.component.css'],
	providers: [PostService]
})

export class PostsComponent {
	posts: Post[];

	constructor(private postService: PostService) {
		
	}

	ngOnInit():void{
		this.getPosts();
	}

	getPosts(){
		this.postService.getPosts()
			.then(pos => {
				console.log("Posts from service: ", pos);
				this.posts = pos;
			})
			.catch(function(err){
				console.log(err);
			});
	}
}