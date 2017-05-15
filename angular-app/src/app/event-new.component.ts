import { Component, Input } from '@angular/core'
import { Event } from './event'
import { EventService } from './event.service'


@Component({
    moduleId: module.id,
    selector: 'event-new',
    templateUrl: 'event-new.component.html',
    styleUrls: ['event-new.component.css'],

})

export class EventNewComponent {
    event: Event = {}
    submitted: boolean = false;
    @Input() selectedDay: Date;

    constructor(private eventservice: EventService) { }

    createEvent(event: any) {
        event.eventDate = event.eventDate || this.selectedDay.toLocaleDateString();
        this.eventservice.createEvent(event);
        this.submitted = !this.submitted;
    }
}

