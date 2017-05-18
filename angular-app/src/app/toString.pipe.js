"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var DateToStringPipe = (function () {
    function DateToStringPipe() {
    }
    DateToStringPipe.prototype.transform = function (date, exponent) {
        return date.toDateString();
    };
    return DateToStringPipe;
}());
DateToStringPipe = __decorate([
    core_1.Pipe({ name: 'dateToString', pure: false })
], DateToStringPipe);
exports.DateToStringPipe = DateToStringPipe;
//# sourceMappingURL=toString.pipe.js.map