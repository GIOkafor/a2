import {User} from '../../user/user';
import {Seeking} from './seeking';

export class Projects{
	constructor(
		public title:string, 
		public new_member_request:number, 
		public files_added:number, 
		public new_notes:number, 
		public project_start_date: Date, 
		public project_end_date: Date, 
		public activity_count:number,
		public is_favourited:boolean,
		//new section
		public project_admin:string,// switch to 'User' eventually
		public seeking: Seeking[],
		public project_members: string[], //User[],
		public images: string[],
		public description: string){}
}