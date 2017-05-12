import { Component, OnInit } from '@angular/core';
import { Event } from './event'
import { ActivatedRoute, Params} from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'event-show',
    templateUrl: 'event-show.component.html'
})
export class EventShowComponent implements OnInit {  
    id: number;
    routeId: any;

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit() : void {
        this.routeId = this.route.params.subscribe(
            params => {
                this.id = +params['id'];
            }
        )

    }}
