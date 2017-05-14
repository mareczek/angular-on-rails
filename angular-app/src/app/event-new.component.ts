import { Component, Input, OnInit } from '@angular/core'
import { Event } from './event'
import { EventService } from './event.service'


@Component({
    moduleId: module.id,
    selector: 'event-new',
    templateUrl: 'event-new.component.html',
})


export class EventNewComponent implements OnInit {
    event: Event = {}
    dateNow = new Date();
    submitted: boolean = false;
    @Input() selectedDay;


    ngOnInit() {

        console.log("init" + this.selectedDay);
    }

    constructor(private eventservice: EventService, private ref: ChangeDetectorRef ) {
        console.log("konstruktor");
        console.log(this.selectedDay);
    }

    createEvent(event: any) {
        this.eventservice.createEvent(event);
        console.log('old submit' + this.submitted);
        this.submitted = !this.submitted;
        console.log('new submit' + this.submitted);
    }

    ngOnChanges() {
        {
            this.ref.markForCheck();

            console.log('dddddddddddd' + this.selectedDay);
        }
    }


}