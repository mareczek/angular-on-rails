"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var http_1 = require("@angular/http");
var dateToString_pipe_1 = require("./dateToString.pipe");
var event_service_1 = require("./event.service");
var calendar_component_1 = require("./calendar.component");
var app_component_1 = require("./app.component");
var event_component_1 = require("./event.component");
var app_routing_module_1 = require("./app-routing.module");
var event_new_component_1 = require("./event-new.component");
var event_show_component_1 = require("./event-show.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule,
            app_routing_module_1.AppRoutingModule,
            forms_1.FormsModule, http_1.HttpModule,
            ng_bootstrap_1.NgbModule.forRoot(),
        ],
        declarations: [app_component_1.AppComponent, calendar_component_1.CalendarComponent,
            event_component_1.EventComponent, event_new_component_1.EventNewComponent, event_show_component_1.EventShowComponent,
            dateToString_pipe_1.DateToStringPipe],
        bootstrap: [app_component_1.AppComponent],
        providers: [event_service_1.EventService]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map