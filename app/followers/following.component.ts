import {Component, OnInit} from '@angular/core';
import {FollowingService} from './following.service';
import {Following} from './following';

@Component({
	moduleId: module.id,
	selector: 'following',
	templateUrl: 'following.component.html',
	styleUrls: ['following.component.css'],
	providers: [FollowingService]
})

export class FollowingComponent {
	following_activity: Following[];

	constructor(private followingService: FollowingService) {
		console.log("Following component constructor fired");
	}

	ngOnInit():void{
		this.getFollowingActivity();
	}

	getFollowingActivity(){
		this.followingService.getFollowing()
		.then(following => {
			console.log('Following from service: ', following);
			this.following_activity = following;
		})

		.catch(function(err){
			console.log(err);
		});
	}
}