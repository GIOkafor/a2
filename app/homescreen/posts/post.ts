export class Post{
	constructor(
	public post_caption:string,
	public image:string,
	public post_time: string,
	public shares: number,
	public comments_count: number,
	public photos_count: number,
	public industry: string){}
/*
	post_caption:string;
	image:string;
	post_time: string;
	shares: number;
	comments_count: number;
	photos_count: number;
	industry: string;
*/
}