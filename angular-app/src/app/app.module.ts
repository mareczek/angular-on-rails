import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';

import { EventService } from './event.service'

import { CalendarComponent } from './calendar.component';
import { AppComponent } from './app.component';
import { EventComponent } from './event.component'
import { AppRoutingModule } from './app-routing.module';
import { EventNewComponent } from './event-new.component'
import { EventShowComponent } from './event-show.component'




@NgModule({
  imports: [BrowserModule,
    AppRoutingModule,
    FormsModule, HttpModule,
    NgbModule.forRoot()],

  declarations: [AppComponent, CalendarComponent,
    EventComponent, EventNewComponent, EventShowComponent],
  bootstrap: [AppComponent],
  providers: [EventService]
})

export class AppModule { }
