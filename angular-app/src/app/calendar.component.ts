import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';

@Component({
  moduleId: module.id,
  selector: 'calendar',
  templateUrl: 'calendar.component.html',
  styleUrls: ['calendar.component.css'],

})

export class CalendarComponent implements OnInit {
  currentDate: Date;
  year: number;
  month: number;
  weekAmount: number;
  startingDay: number;
  days: any[];
  weeks: any[];
  selectedDay: Date = new Date();
  addEventFlag: boolean;
  showAllFlag: boolean;

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


  previousMonth() {
    this.month--;
    if (this.month == (-1)) { this.year--; this.month = 11; }
    this.initCalendarView(this.year, this.month);
  }

  nextMonth() {
    this.month++;
    if (this.month == 11) { this.year++; this.month = 0; }
    this.initCalendarView(this.year, this.month);
  }



  getWeeksforMonth() {
    if (this.days.length > 28 || this.startingDay != 1) {
      if (this.days.length == 31) this.weekAmount = 6;
      else this.weekAmount = 5;
    }
    else this.weekAmount = 4;
  }

  seperateDaysForWeeks() {
    //fills weeks with arrays of days
    var days: any;
    this.weeks = [this.weekAmount];

    for (var j = 0, x = 0; j < this.weekAmount; j++) {
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


  setStartingOffset(days: any[]) {
    //adds blank days if month doesn't start with sunday
    for (var z = 0; z < this.startingDay; z++) {
      days.push({ day: null, nr: null });
    }
  }


  getDaysForMonth() {
    //fills array with days and sets startingDay
    var month = this.currentDate.getMonth();
    var year = this.currentDate.getFullYear();

    var date = new Date(year, month, 1);
    var days = [];
    while (date.getMonth() === month) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    this.days = days;
    this.startingDay = this.days[0].getDay();
  }


  initCalendarView(year: number, month: number, day = 1) {
    this.currentDate = new Date(year, month, day);
    this.getDaysForMonth();
    this.getWeeksforMonth();
    this.seperateDaysForWeeks()
  }

  ngOnInit() {
    var today = new Date();
    this.year = today.getFullYear();
    this.month = today.getMonth();
    this.initCalendarView(this.year, this.month);
  }


}


