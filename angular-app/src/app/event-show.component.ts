import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Location } from '@angular/common';


import { Event } from './event';
import { EventService } from './event.service';
@Component({
	moduleId: module.id,
	selector: 'event-show',
	templateUrl: 'event-show.component.html',
	providers: [EventService]
})
export class EventShowComponent implements OnInit {
	event: Event;

	constructor(
		private eventService: EventService,
		private route: ActivatedRoute,
		private location: Location
	) { }

	ngOnInit(): void {
		this.route.params
			.switchMap((params: Params) => this.eventService.getEvent(+params['id']))
			.subscribe(event => this.event = event);
	}
}