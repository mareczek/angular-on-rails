import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router';
import { Event } from './event'
import { EventService } from './event.service'

@Component({
    moduleId: module.id,
    selector: 'events',
    templateUrl: 'event.component.html',
    providers: [EventService]
})


export class EventComponent implements OnInit {
    events: Event[];

    constructor(
        private eventService: EventService,
        private router: Router) { }

    getEvents(): void {
        this.eventService
            .getEvents()
            .then(events => this.events = events);
    }

    ngOnInit(): void {
        this.getEvents();
    }
}