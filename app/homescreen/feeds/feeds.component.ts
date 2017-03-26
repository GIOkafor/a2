import {Component, OnInit} from '@angular/core';
import {FeedService} from './feed.service';
import {Feed} from './feed';


@Component({
	moduleId: module.id,
	selector: 'feeds',
	templateUrl: 'feeds.component.html',
	styleUrls: ['feeds.component.css'],
	providers: [FeedService]
})

export class FeedsComponent {
	feed_activity: Feed[];

	constructor(private feedService: FeedService) {
		console.log("Feed component constructor fired");
	}

	ngOnInit():void{
		this.getFeedActivity();
	}

	getFeedActivity(){
		this.feedService.getFeedActivity()
		.then(user_feed => {
			console.log('Feeds from service: ', user_feed);
			this.feed_activity = user_feed;
		})

		.catch(function(err){
			console.log(err);
		});
	}
}