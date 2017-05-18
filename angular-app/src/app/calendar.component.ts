import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import * as moment from 'moment';
import { Event } from './event'
import { EventService } from './event.service'
import { DateToStringPipe } from './dateToString.pipe'

@Component({
  moduleId: module.id,
  selector: 'calendar',
  templateUrl: 'calendar.component.html',
  styleUrls: ['calendar.component.css'],

})

export class CalendarComponent implements OnInit {
  showingDate: Date;
  selectedDay: Date;
  showingDateString: string;
  startingDay: number;
  eventsForMonth: Date[];
  days: any[];
  weeks: any[];
  addEventFlag: boolean;
  showAllFlag: boolean;

  constructor(private eventservice: EventService) { }

  addEvent() {
    this.showAllFlag = false;
    this.addEventFlag = !this.addEventFlag;
    setTimeout(() => { this.addEventFlag = true }, 0);
  }

  showAllEvents() {
    this.addEventFlag = false;
    this.showAllFlag = true;
    setTimeout(() => { this.showAllFlag = true }, 0);
  }

  onClick(day: Date) {
    this.selectedDay = day;
  }

  markDayIfHasEvent(day: Date) {
    for (var i = 0; i < this.eventsForMonth.length; i++) {
      if (this.eventsForMonth[i].toDateString() == day.toDateString())
        return true;
    }
  }

  getNofWeeksforCurrentMonth() {
    if (this.days.length > 28 || this.startingDay != 1) {
      if (this.days.length == 31) return 6;
      else return 5;
    }
    else return 4;
  }

  previousMonth() {
    var month = this.showingDate.getMonth();
    var year = this.showingDate.getFullYear();
    this.showingDate.setMonth(--month);

    if (month == (-1)) { this.showingDate.setFullYear(--year); this.showingDate.setMonth(11); }
    this.initCalendarView(this.showingDate);
  }

  nextMonth() {
    var month = this.showingDate.getMonth();
    var year = this.showingDate.getFullYear();
    this.showingDate.setMonth(++month);
    if (month == 11) { this.showingDate.setFullYear(++year); this.showingDate.setMonth(0); }
    this.initCalendarView(this.showingDate);
  }


  getDaysForCurrentMonth() {
    //fills array with days and sets startingDay
    var month = this.showingDate.getMonth();
    var year = this.showingDate.getFullYear();
    var date = new Date(year, month, 1);
    var days = [];

    while (date.getMonth() === month) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    this.days = days;
    this.startingDay = this.days[0].getDay();
  }

  setStartingOffset(days: any[]) {
    //adds blank days if month doesn't start with sunday
    for (var z = 0; z < this.startingDay; z++) {
      days.push({ day: null, nr: null });
    }
  }

  seperateDaysInWeeks() {
    //fills weeks with arrays of days
    var days: any;
    var nOfWeeks = this.getNofWeeksforCurrentMonth();
    this.weeks = [nOfWeeks];

    for (var j = 0, x = 0; j < nOfWeeks; j++) {
      days = [];

      if (j == 0) this.setStartingOffset(days);

      for (var i = x; i < this.days.length; i++ , x++) {
        days.push(
          { day: this.days[i], nr: i + 1 });
        if (this.days[i].getDay() == 6) { x++; break; }
      }
      this.weeks.push({ days: days });
    }
  }

  getAllEventsForMonth(month: number, events: Promise<Event[]>) {
    var eventsArr = new Array<Date>();
    events.then(events => {
      for (var i = 0; i < events.length; i++) {
        var date = new Date(events[i].eventDate); //from string to Date conversion
        if (date.getMonth() == month)
          eventsArr.push(date);
      }
    })
    return eventsArr;
  }


  initCalendarView(date: Date) {
    console.log(date);
    this.showingDateString = date.toDateString();
    this.getDaysForCurrentMonth();
    this.getNofWeeksforCurrentMonth();
    this.seperateDaysInWeeks()
    this.eventsForMonth = this.getAllEventsForMonth(date.getMonth(), this.eventservice.getEvents())
  }

  ngOnInit() {
    var month = new Date().getMonth();
    var year = new Date().getFullYear();
    this.showingDate = new Date(year, month, 1);
    this.initCalendarView(this.showingDate);
  }
}


