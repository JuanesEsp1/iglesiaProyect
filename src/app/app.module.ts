import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from 'src/components/list/list.component';
import { EventComponent } from 'src/components/event/event.component';

import { EventCalendarMobile } from 'src/components/event/event-calendar-mobile/event-calendar-mobile.component';
import { EventCalendarWeb } from 'src/components/event/event-calendar-web/event-calendar-web.component';
import { EventCalendarSingle } from 'src/components/event/event-calendar-single/event.component';
@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    EventComponent,
    EventCalendarMobile,
    EventCalendarWeb,
    EventCalendarSingle
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
