import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './component/app.component';
import { LandingComponent } from './component/landing/landing.component';
import { PollComponent } from './component/poll/poll.component';
import { PollListComponent } from './component/poll-list/poll-list.component';
import { SinglePollComponent } from './component/single-poll/single-poll.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    PollComponent,
    PollListComponent,
    SinglePollComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
