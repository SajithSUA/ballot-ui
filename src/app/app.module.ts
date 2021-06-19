import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VoteComponent } from './vote/vote.component';
import {FormsModule} from "@angular/forms";
import { VoteResultComponent } from './vote-result/vote-result.component';

@NgModule({
  declarations: [
    AppComponent,
    VoteComponent,
    VoteResultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
