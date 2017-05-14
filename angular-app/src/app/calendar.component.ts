import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  moduleId: module.id,
  selector: 'calendar',
  templateUrl: 'calendar.component.html',
  styleUrls: ['calendar.component.css']
})


export class CalendarComponent implements OnInit {
  currentDate: Date;
  currentMonth: any
  weekAmount: number;
  days: any[];
  weeks: any[];
  startingDay: number;

  constructor() {
  }



  setDisplay(date: Date) {
    this.currentDate = date;
    var monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    this.currentMonth = monthNames[date.getMonth()];

  }


  getWeeksforMonth() {
    if (this.days.length != 28 || this.startingDay != 1) this.weekAmount = 5;
    else this.weekAmount = 4;
  }

  seperateDaysForWeeks() {
    //fills weeks with arrays of days
    var days: any; 
    this.startingDay = this.days[0].getDate();
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
    //adds blank days if month doesn't start with monday
    for (var z = 0; z < this.startingDay; z++) {
      days.push({ day: null, nr: null });
    }
    
  }


  getDaysForMonth() {
    //fills array with days and sets startingDay
    var currDate = this.currentDate;
    var date = new Date(currDate.getFullYear(), currDate.getMonth(), 1);
    var days = [];
    while (date.getMonth() === currDate.getMonth()) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    this.days = days;
    this.startingDay = this.days[0].getDay();
    this.numberOfDays = this.getDaysInMonth(this.currentDate.getMonth());
    console.log(this.numberOfDays);
  }


  getDaysInMonth(month: any) {
    var year = this.currentDate.getFullYear();
    return new Date(year, month, 0).getDate();
  }


  ngOnInit() {
    this.setDisplay(new Date());
    this.getDaysForMonth();
    this.getWeeksforMonth();
    this.seperateDaysForWeeks()

  }

}


