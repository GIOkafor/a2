import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {Hero} from './hero';
import {HeroService} from './hero.service';
import {OnInit} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-heroes',
  templateUrl: 'heroes.component.html',
  styleUrls: [
  	'heroes.component.css', 
  	'dashboard.component.css',
  	'hero-detail.component.css'
  	],
	providers: [HeroService]
	//appcomponent can use the injected service above
	//and so can it'c child components in the tree
})

export class HeroesComponent implements OnInit{ 
	selectedHero: Hero;
	heroes: Hero[];

	//the constructor is for SIMPLE initializatons like wiring constructor parameters to properties
	constructor(
		private router: Router,
		private heroService: HeroService){}

	ngOnInit(): void{
		this.getHeroes();
	}

	onSelect(hero: Hero): void{
		this.selectedHero = hero;
	}

	getHeroes(): void{
		this.heroService.getHeroes().then(heroes => this.heroes = heroes);
	}

	gotoDetail(): void{
		this.router.navigate(['/detail', this.selectedHero.id]);
	}
}
