import { Component, OnInit } from '@angular/core'
import { Event } from './event'
import { EventService } from './event.service'
import { Observable } from 'rxjs/Rx'

@Component({
    moduleId: module.id,
    selector: 'events',
    templateUrl: 'event.component.html',
    providers: [EventService]
})


export class EventComponent implements OnInit {

    events: Event[];
    errorMessage: string;
    mode = "Observable"

    constructor(private eventservice: EventService
    ) {
    }

    ngOnInit(): void {
        let timer = Observable.timer(0, 10000);
        timer.subscribe(() => this.getEvents());
    }



    getEvents() {
        this.eventservice.getEvents()
            .subscribe(events => this.events = events,
            error => this.errorMessage = <any>error)
    };


}