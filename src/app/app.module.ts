import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from 'src/components/list/list.component';
import { EventComponent } from 'src/components/event/event.component';

import { EventCalendar } from 'src/components/event/event-calendar/event-calendar.component';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    EventComponent,
    EventCalendar
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
