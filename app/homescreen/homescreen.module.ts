import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import {NumberConverter} from '../number.pipe';

import {HomeScreen} from './homescreen.component';
import {PostsComponent} from './posts/posts.component';
import { PostDetailsComponent }    from './posts/post-details.component';
import {GroupsComponent} from './groups/groups.component';
import {FeedsComponent} from './feeds/feeds.component';
import {ProjectNotificationsComponent} from './projects/project-notifications.component';
import {ProjectsComponent} from './projects/projects.components';
import {SeedingComponent} from './seeding/seeding.component';
import {FollowingComponent} from '../followers/following.component';

import {PostService} from './posts/posts.service';

import {HomeScreenRoutingModule} from './homescreen-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HomeScreenRoutingModule
  ],
  declarations: [
    HomeScreen,
    PostsComponent,
    PostDetailsComponent,
    GroupsComponent,
    FeedsComponent,
    ProjectNotificationsComponent,
    ProjectsComponent,
    SeedingComponent,
    FollowingComponent,
    NumberConverter
  ],
  providers: [ PostService ]
})
export class HomeScreenModule {}
