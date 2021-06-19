import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {VoteResultComponent} from "./vote-result/vote-result.component";
import {VoteComponent} from "./vote/vote.component";
import {CreatePollComponent} from "./create-poll/create-poll.component";

const routes: Routes = [
  { path: '', redirectTo: '/vote', pathMatch: 'full' },
  { path: 'result', component: VoteResultComponent },
  { path: 'vote', component: VoteComponent },
  { path: 'createPoll', component: CreatePollComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
