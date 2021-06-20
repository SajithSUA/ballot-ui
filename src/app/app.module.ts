import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VoteComponent } from './vote/vote.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { VoteResultComponent } from './vote-result/vote-result.component';
import { CreatePollComponent } from './create-poll/create-poll.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    VoteComponent,
    VoteResultComponent,
    CreatePollComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
