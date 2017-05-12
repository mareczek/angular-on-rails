import { Injectable } from '@angular/core'
import { Http, Response, Headers, RequestOptions } from '@angular/http'
import { Observable } from 'rxjs/Rx'



@Injectable()
export class EventService {
    private eventsUrl = "http://localhost:3005/events";

    constructor(private http: Http) {

    }



    getEvents(): Observable<Event[]> {
        return this.http.get(this.eventsUrl)
            .map((response: Response) => <Event[]>response.json())
            .catch(this.handleError);
    }

    private handleError(error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const er = body.error || JSON.stringify(body);
            errMsg = '${error.status} - ${error.statusText || " } ${err} ';
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}
