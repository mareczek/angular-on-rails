import { Component } from '@angular/core';
import * as moment from 'moment';

@Component({
  moduleId: module.id,
  selector: 'calendar',
  templateUrl: 'calendar.component.html'
})
export class CalendarComponent  {  

  day = moment();

}
