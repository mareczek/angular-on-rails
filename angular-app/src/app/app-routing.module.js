"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var calendar_component_1 = require("./calendar.component");
var event_component_1 = require("./event.component");
var event_new_component_1 = require("./event-new.component");
var event_show_component_1 = require("./event-show.component");
var routes = [
    {
        path: '',
        redirectTo: '/calendar',
        pathMatch: 'full'
    },
    {
        path: 'calendar',
        component: calendar_component_1.CalendarComponent,
        children: [
            {
                path: 'events',
                component: event_component_1.EventComponent,
            },
            {
                path: 'events/new',
                component: event_new_component_1.EventNewComponent,
            },
            {
                path: 'events/:id',
                component: event_show_component_1.EventShowComponent,
            }
        ]
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map