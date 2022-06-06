"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ResumeComponent = void 0;
var core_1 = require("@angular/core");
var utils_1 = require("../core/utils");
var ResumeComponent = /** @class */ (function () {
    function ResumeComponent() {
        this.isSticky = false;
        this.pageYOffset = 0;
        this.checkResize();
    }
    ResumeComponent.prototype.checkScroll = function () {
        this.pageYOffset = window.pageYOffset;
        this.isSticky = pageYOffset >= 250;
    };
    ResumeComponent.prototype.checkResize = function () {
        this.pageXOffset = window.innerWidth;
    };
    ResumeComponent.prototype.onViewport = function (isOnViewPort, element) {
        this.activeSection = element;
    };
    __decorate([
        core_1.HostListener('window:scroll'),
        utils_1.debounce()
    ], ResumeComponent.prototype, "checkScroll");
    __decorate([
        core_1.HostListener('window:resize'),
        utils_1.debounce(25)
    ], ResumeComponent.prototype, "checkResize");
    __decorate([
        utils_1.debounce(150)
    ], ResumeComponent.prototype, "onViewport");
    ResumeComponent = __decorate([
        core_1.Component({
            selector: 'app-resume',
            templateUrl: './resume.component.html',
            styleUrls: ['./resume.component.css', './resume.component.responsivity.css']
        })
    ], ResumeComponent);
    return ResumeComponent;
}());
exports.ResumeComponent = ResumeComponent;
