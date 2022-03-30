import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UiModule } from 'projects/ui/src/public-api';
import { TalksModule } from 'projects/talks/src/public-api';
import { NgMaterialModule } from 'projects/ui/src/lib/ng-material.module';
import { CreateTalkComponent } from './create-talk/create-talk.component';

@NgModule({
  declarations: [AppComponent, CreateTalkComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    UiModule,
    TalksModule,
    NgMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
