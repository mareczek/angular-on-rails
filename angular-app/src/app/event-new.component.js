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
var EventNewComponent = (function () {
    function EventNewComponent(eventservice, ref) {
        this.eventservice = eventservice;
        this.ref = ref;
        this.event = {};
        this.dateNow = new Date();
        this.submitted = false;
        console.log("konstruktor");
        console.log(this.selectedDay);
    }
    EventNewComponent.prototype.ngOnInit = function () {
        console.log("init" + this.selectedDay);
    };
    EventNewComponent.prototype.createEvent = function (event) {
        this.eventservice.createEvent(event);
        console.log('old submit' + this.submitted);
        this.submitted = !this.submitted;
        console.log('new submit' + this.submitted);
    };
    EventNewComponent.prototype.ngOnChanges = function () {
        {
            this.ref.markForCheck();
            console.log('dddddddddddd' + this.selectedDay);
        }
    };
    return EventNewComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], EventNewComponent.prototype, "selectedDay", void 0);
EventNewComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'event-new',
        templateUrl: 'event-new.component.html',
    }),
    __metadata("design:paramtypes", [event_service_1.EventService, Object])
], EventNewComponent);
exports.EventNewComponent = EventNewComponent;
//# sourceMappingURL=event-new.component.js.map