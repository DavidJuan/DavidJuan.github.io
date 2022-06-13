"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppComponent = void 0;
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent(titleService, metaTagService) {
        this.titleService = titleService;
        this.metaTagService = metaTagService;
        this.title = "Live Resume - David Juan";
    }
    AppComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle(this.title);
        this.metaTagService.addTags([
            {
                name: "keywords",
                content: "Web Developer, Java Developer, Full-stack Java Developer, DevOps Engineer, Android Developer, David Juan Live Resume, David Juan Resume, David Juan CV, Curriculum David Juan, GBASTOS Resumo, gbastos live resume"
            },
            { name: "robots", content: "index, follow" },
            { name: "author", content: "David Juan" },
            { name: "viewport", content: "width=device-width, initial-scale=1" },
            { name: "date", content: "2020-05-12", scheme: "YYYY-MM-DD" },
            { charset: "UTF-8" },
        ]);
        this.metaTagService.updateTag({
            name: "description",
            content: "Hello, I'm a Full-stack Web Developer with 10+ years of experience designing web and mobile projects. Find out more in my live-resume!"
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "app-root",
            templateUrl: "./app.component.html",
            styleUrls: ["./app.component.css"]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
