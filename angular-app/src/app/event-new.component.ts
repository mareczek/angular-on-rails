import { Component } from '@angular/core'
import { Event } from './event'
import { EventService } from './event.service'

@Component({
    moduleId: module.id,
    selector: 'event-new',
    templateUrl: 'event-new.component.html',
})


export class EventNewComponent {
    event: Event = {
    }

    constructor(private eventservice: EventService) { }

    createEvent(event: Event) {
        this.eventservice.createEvent(event);
    }


}