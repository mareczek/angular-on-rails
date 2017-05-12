
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class EventService {
    private headers = new Headers({
        'Content-Type': 'application/json'
    });

    private URL: string = 'http://localhost:3005/events';

    constructor(private http: Http) {
    }

    getEvents(): Promise<Event[]> {
        return this.http.get(this.URL)
            .toPromise()
            .then(response => response.json() as Event[])
            .catch(this.handleError);
    }


    getEvent(id: number): Promise<Event> {
        const url = `${this.URL}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json() as Event)

    }


    createEvent(event: Event): Promise<Event> {
        return this.http
            .post(this.URL, JSON.stringify({event}), { headers: this.headers })
            .toPromise()
            .then(res => res.json().data as Event)
            .catch(this.handleError);
    }







    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}
