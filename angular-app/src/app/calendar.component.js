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
    }
    CalendarComponent.prototype.setDisplay = function (date) {
        this.currentDate = date;
        var monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        this.currentMonth = monthNames[date.getMonth()];
    };
    CalendarComponent.prototype.getWeeksforMonth = function () {
        if (this.days.length != 28 || this.startingDay != 1)
            this.weekAmount = 5;
        else
            this.weekAmount = 4;
    };
    CalendarComponent.prototype.seperateDaysForWeeks = function () {
        //fills weeks with arrays of days
        var days;
        this.startingDay = this.days[0].getDate();
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
        //adds blank days if month doesn't start with monday
        for (var z = 0; z < this.startingDay; z++) {
            days.push({ day: null, nr: null });
        }
    };
    CalendarComponent.prototype.getDaysForMonth = function () {
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
    };
    CalendarComponent.prototype.getDaysInMonth = function (month) {
        var year = this.currentDate.getFullYear();
        return new Date(year, month, 0).getDate();
    };
    CalendarComponent.prototype.ngOnInit = function () {
        this.setDisplay(new Date());
        this.getDaysForMonth();
        this.getWeeksforMonth();
        this.seperateDaysForWeeks();
    };
    return CalendarComponent;
}());
CalendarComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'calendar',
        templateUrl: 'calendar.component.html',
        styleUrls: ['calendar.component.css']
    }),
    __metadata("design:paramtypes", [])
], CalendarComponent);
exports.CalendarComponent = CalendarComponent;
//# sourceMappingURL=calendar.component.js.map