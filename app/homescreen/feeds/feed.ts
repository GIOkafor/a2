export class Feed {
	
	//consider having different type of feed objects and assigning layout/values based on type
	//doing the above seems to convulated atm KISS
	constructor(
		public feed_type:string,
		public feed_origin: string,
		public image: string[],

		//particular to new member start
		public industry: string,
		public occupation: string,
		public location: string,//shared with job posting
		public url: string,
		//particular to new member end

		//job posting
		public job_title: string,
		public salary: string,
		public posted: string,

		//industry related
		public text: string
		) {
		
		//TODO:
		// specify feed type in argument
		// create object and assign variables based on type specified above
	}
}