import {Component} from '@angular/core';
import {Router} from '@angular/router';

import {User} from './user';

@Component({
	moduleId: module.id,
	selector: 'login-form',
	templateUrl: 'login-form.component.html',
	styleUrls: ['login-form.css']
})

export class LoginFormComponent {
	user = new User('Ikechukwu', 'Okafor', 'ik4shizzle@yahoo.com', '1234', '','');
	
	//TODO: Extract countries and industries into service
	countries = ['Select Country', 'CAN', 'NGA', 'USA', 'CHN'];
	industries = ['Fashion/Entertainment', 'Photography', 'Energy', 'Technology'];

	submitted = false;
	submitted2 = false;

	onSubmit(){ this.submitted = true; console.log(this.user);}

	join(){this.submitted2 = true; console.log(this.user);}

	newUser(){
		//this.user = new User('','','','');
	}

	//TODO: Remove this when we're done
	get diagnostic(){return JSON.stringify(this.user);}
}