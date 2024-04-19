import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './component/landing/landing.component';
import { PollListComponent } from './component/poll-list/poll-list.component';
import { SinglePollComponent } from './component/single-poll/single-poll.component';
import { Tmp1Component } from './component/tmp1/tmp1.component'
import { Tmp2Component } from './component/tmp2/tmp2.component'

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'polls', component: PollListComponent },
  { path: 'polls/:id', component: SinglePollComponent },
  { path: 'pollsTmp1/:id', component: Tmp1Component },
  { path: 'pollsTmp2/:id', component: Tmp2Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
