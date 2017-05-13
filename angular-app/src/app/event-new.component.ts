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
    dateNow = new Date();
    
    constructor(private eventservice: EventService) { }

    createEvent(event: any) {
        this.eventservice.createEvent(event);
    }


}