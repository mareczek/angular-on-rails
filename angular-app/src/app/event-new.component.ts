import { Component} from '@angular/core'
import {Event} from './event' 

@Component({
    moduleId: module.id,
    selector: 'event-new',
    templateUrl: 'event-new.component.html',
})


export class EventNewComponent {
    event: Event;

}