import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

//don't forget the paranthesis as doing so
//leads to an error that's hard to diagnose
@Injectable()
export class HeroService{
	getHeroes(): Promise<Hero[]>{
		return Promise.resolve(HEROES);
	}

	getHeroesSlowly(): Promise<Hero[]>{
		return new Promise<Hero[]>(resolve => 
			setTimeout(resolve, 2000))
			.then(() => this.getHeroes());
	} 
}