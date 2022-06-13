"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var resume_component_1 = require("./resume/resume.component");
// Any URL apart from the root domain is going to be rendered as "page-not-found".
var routes = [
    { path: "", component: resume_component_1.ResumeComponent },
    { path: "about", redirectTo: "/#about" },
    { path: "experience", redirectTo: "/#experience" },
    { path: "experiences", redirectTo: "/#experience" },
    { path: "posts", redirectTo: "/#posts" },
    { path: "contact", redirectTo: "/#contact" },
    { path: "**", redirectTo: "/page-not-found" },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forRoot(routes, {
                    // In order to get anchor / fragment scrolling to work at all, we need to
                    // enable it on the router.
                    anchorScrolling: "enabled",
                    // Once the above is enabled, the fragment link will only work on the
                    // first click. This is because, by default, the Router ignores requests
                    // to navigate to the SAME URL that is currently rendered. Unfortunately,
                    // the fragment scrolling is powered by Navigation Events. As such, we
                    // have to tell the Router to re-trigger the Navigation Events even if we
                    // are navigating to the same URL.
                    onSameUrlNavigation: "reload"
                }),
            ],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
