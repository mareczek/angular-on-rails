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
var CalendarComponent = (function () {
    function CalendarComponent() {
        this.selectedDay = new Date();
    }
    CalendarComponent.prototype.onClick = function (day) {
        this.selectedDay = day;
        console.log(this.selectedDay);
    };
    CalendarComponent.prototype.previousMonth = function () {
        console.log('showPreviousMonth');
        this.month--;
        if (this.month == (-1)) {
            this.year--;
            this.month = 11;
        }
        console.log('this month:' + this.month);
        console.log('this.year: ' + this.year);
        console.log('this.date =' + this.currentDate);
        this.initCalendarView(this.year, this.month);
    };
    CalendarComponent.prototype.nextMonth = function () {
        console.log('showNextMonth');
        this.month++;
        if (this.month == 11) {
            this.year++;
            this.month = 0;
        }
        console.log('this month:' + this.month);
        console.log('this.year: ' + this.year);
        console.log('this.date =' + this.currentDate);
        this.initCalendarView(this.year, this.month);
    };
    CalendarComponent.prototype.getWeeksforMonth = function () {
        if (this.days.length > 28 || this.startingDay != 1) {
            if (this.days.length == 31)
                this.weekAmount = 6;
            else
                this.weekAmount = 5;
        }
        else
            this.weekAmount = 4;
    };
    CalendarComponent.prototype.seperateDaysForWeeks = function () {
        //fills weeks with arrays of days
        var days;
        this.weeks = [this.weekAmount];
        for (var j = 0, x = 0; j < this.weekAmount; j++) {
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
    };
    CalendarComponent.prototype.initCalendarView = function (year, month, day) {
        if (day === void 0) { day = 1; }
        this.currentDate = new Date(year, month, day);
        this.getDaysForMonth();
        this.getWeeksforMonth();
        this.seperateDaysForWeeks();
    };
    CalendarComponent.prototype.ngOnInit = function () {
        var today = new Date();
        this.year = today.getFullYear();
        this.month = today.getMonth();
        this.initCalendarView(this.year, this.month);
    };
    return CalendarComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Date)
], CalendarComponent.prototype, "selectedDay", void 0);
CalendarComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'calendar',
        templateUrl: 'calendar.component.html',
        styleUrls: ['calendar.component.css'],
    })
], CalendarComponent);
exports.CalendarComponent = CalendarComponent;
//# sourceMappingURL=calendar.component.js.map