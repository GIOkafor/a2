import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {DashboardComponent} from './dashboard.component';
import {HeroesComponent} from './heroes.component';
import {HeroDetailComponent} from './hero-detail.component';

import {LoginFormComponent} from './login/login-form.component';
import {IndustrySelect} from './industry/industry-select.component';
import {PageNotFoundComponent} from './page-not-found.component';

const routes: Routes = [
	{path: '', redirectTo: '/login', pathMatch: 'full'},
	{path: 'dashboard', component: DashboardComponent},
	{path: 'detail/:id', component: HeroDetailComponent},
	{path: 'heroes', component: HeroesComponent},
	{path: 'login', component: LoginFormComponent},
	{path: 'select-industry', component: IndustrySelect},
	{path: '**', component: PageNotFoundComponent}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule{}