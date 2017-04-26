import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeScreen }    from './homescreen.component';
import { PostsComponent }    from './posts/posts.component';
import { PostDetailsComponent }    from './posts/post-details.component';

const homeScreenRoutes: Routes = [
  { 
  	path: 'homescreen',  
  	component: HomeScreen,
  	children: [
  		{ 
  			path: '',  
  			component: PostsComponent,
  		},
  		{
  			path: 'post-details',//suffix with id or something
  			component: PostDetailsComponent
  		}
  	]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(homeScreenRoutes)
  ],
  exports: [
    RouterModule
  ]
})

//this component is in charge of displaying dynamic views
export class HomeScreenRoutingModule { }
