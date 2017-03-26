import {Following} from './following';
import {Post} from '../homescreen/posts/post';

/*
 fake objects for reference
 */
var post1 = new Post(
			'Hodor hodor - hodor, hodor. Hodor hodor... Hodor hodor hodor. Hodor. Hodor hodor; hodor hodor hodor hodor.',
			['leopard1.jpg'],
			'June 24th, 2016',
			112,
			4,
			4,
			'Television');

var post2 = new Post(
			'Hodor, hodor. Hodor. Hodor, hodor hodor. Hodor. Hodor hodor - hodor hodor hodor, hodor. Hodor hodor?! Hodor! Hodor hodor, HODOR hodor, hodor hodor; ',
			[''],
			'June 25th, 2016',
			23,
			8,
			1,
			'Pharma');

var post3 = new Post(
			'Hodor hodor - hodor hodor hodor. Hodor! Hodor hodor, hodor... Hodor hodor hodor?!',
			['leopard4.jpg'],
			'June 24th, 2016',
			557,
			34,
			1,
			'Automotive');

var imageOnlyPost = new Post(
			'',
			['leopard1.jpeg','leopard3.jpg', 'leopard2.jpg', 'leopard4.jpg'],
			'',
			12,
			78,
			94,
			'Photography')
/* End Fake Object Creation*/

export const FOLLOWING: Following[] = [
	{
		firstName: 'JOHN',
		lastName: 'SNOW',
		profile_image: 'app/homescreen/img/following/john-snow.jpg',
		posts: [post1, post2, post3],
		latest_post: imageOnlyPost
	},
	{
		firstName: 'EVA',
		lastName: 'GREEN',
		profile_image: 'app/homescreen/img/following/eva-green.jpg',
		posts: [post1, post2, post3],
		latest_post: post2
	},
	{
		firstName: 'SANZA',
		lastName: 'STARK',
		profile_image: 'app/homescreen/img/following/sanza-stark.jpg',
		posts: [post1, post2, post3],
		latest_post: post3
	}
]