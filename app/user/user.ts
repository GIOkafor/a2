export class User {
	
	constructor(
		public firstName: string,
		public lastName: string,
		public email: string,
		public password: string,
		public country: string,
		public newFollowersCount: number,
		public friendRequestCount: number,
		public newMessagesCount: number
	){}
}