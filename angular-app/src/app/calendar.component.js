"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var event_service_1 = require("./event.service");
var CalendarComponent = (function () {
    function CalendarComponent(eventservice) {
        this.eventservice = eventservice;
    }
    CalendarComponent.prototype.addEvent = function () {
        var _this = this;
        this.showAllFlag = false;
        this.addEventFlag = !this.addEventFlag;
        setTimeout(function () { _this.addEventFlag = true; }, 0);
    };
    CalendarComponent.prototype.showAllEvents = function () {
        var _this = this;
        this.addEventFlag = false;
        this.showAllFlag = true;
        setTimeout(function () { _this.showAllFlag = true; }, 0);
    };
    CalendarComponent.prototype.markDayIfHasEvent = function (day) {
        for (var i = 0; i < this.eventsForMonth.length; i++) {
            if (this.eventsForMonth[i].toDateString() == day.toDateString())
                return true;
        }
    };
    CalendarComponent.prototype.getAllEventsForMonth = function (month, events) {
        var eventsArr = new Array();
        events.then(function (events) {
            for (var i = 0; i < events.length; i++) {
                var date = new Date(events[i].eventDate);
                if (date.getMonth() == month)
                    eventsArr.push(date);
            }
        });
        return eventsArr;
    };
    CalendarComponent.prototype.onClick = function (day) {
        this.selectedDay = day;
    };
    CalendarComponent.prototype.previousMonth = function () {
        var month = this.showingDate.getMonth();
        var year = this.showingDate.getFullYear();
        this.showingDate.setMonth(month - 1);
        if (month == (-1)) {
            this.showingDate.setFullYear(year - 1);
            this.showingDate.setMonth(11);
        }
        this.initCalendarView(this.showingDate);
    };
    CalendarComponent.prototype.nextMonth = function () {
        var month = this.showingDate.getMonth();
        var year = this.showingDate.getFullYear();
        this.showingDate.setMonth(month + 1);
        if (month == 11) {
            this.showingDate.setFullYear(year + 1);
            this.showingDate.setMonth(0);
        }
        this.initCalendarView(this.showingDate);
    };
    CalendarComponent.prototype.getNofWeeksforMonth = function () {
        if (this.days.length > 28 || this.startingDay != 1) {
            if (this.days.length == 31)
                return 6;
            else
                return 5;
        }
        else
            return 4;
    };
    CalendarComponent.prototype.seperateDaysForWeeks = function () {
        //fills weeks with arrays of days
        var days;
        var nOfWeeks = this.getNofWeeksforMonth();
        this.weeks = [nOfWeeks];
        for (var j = 0, x = 0; j < nOfWeeks; j++) {
            days = [];
            if (j == 0)
                this.setStartingOffset(days);
            for (var i = x; i < this.days.length; i++, x++) {
                days.push({ day: this.days[i], nr: i + 1 });
                if (this.days[i].getDay() == 6) {
                    x++;
                    break;
                }
            }
            this.weeks.push({ days: days });
        }
    };
    CalendarComponent.prototype.setStartingOffset = function (days) {
        //adds blank days if month doesn't start with sunday
        for (var z = 0; z < this.startingDay; z++) {
            days.push({ day: null, nr: null });
        }
    };
    CalendarComponent.prototype.getDaysForMonth = function () {
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
    };
    CalendarComponent.prototype.initCalendarView = function (date) {
        this.showingDateString = date.toDateString();
        this.getDaysForMonth();
        this.getNofWeeksforMonth();
        this.seperateDaysForWeeks();
        this.eventsForMonth = this.getAllEventsForMonth(date.getMonth(), this.eventservice.getEvents());
    };
    CalendarComponent.prototype.ngOnInit = function () {
        var month = new Date().getMonth();
        var year = new Date().getFullYear();
        this.showingDate = new Date(year, month, 1);
        this.initCalendarView(this.showingDate);
    };
    return CalendarComponent;
}());
CalendarComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'calendar',
        templateUrl: 'calendar.component.html',
        styleUrls: ['calendar.component.css'],
    }),
    __metadata("design:paramtypes", [event_service_1.EventService])
], CalendarComponent);
exports.CalendarComponent = CalendarComponent;
//# sourceMappingURL=calendar.component.js.map