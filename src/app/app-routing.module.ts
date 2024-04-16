import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './component/landing/landing.component';
import { PollListComponent } from './component/poll-list/poll-list.component';
import { SinglePollComponent } from './component/single-poll/single-poll.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'polls', component: PollListComponent },
  { path: 'polls/:id', component: SinglePollComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
