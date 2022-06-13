"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = exports.HammerConfig = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var resume_module_1 = require("./resume/resume.module");
var page_not_found_routing_module_1 = require("./404/page-not-found-routing.module");
var page_not_found_module_1 = require("./404/page-not-found.module");
var core_module_1 = require("./core/core.module");
var core_2 = require("@angular/core");
var en_1 = require("@angular/common/locales/en");
var pt_1 = require("@angular/common/locales/pt");
var pt_2 = require("@angular/common/locales/extra/pt");
var compat_1 = require("@angular/fire/compat");
var database_1 = require("@angular/fire/compat/database");
var analytics_1 = require("@angular/fire/compat/analytics");
var environment_1 = require("../environments/environment");
var platform_browser_2 = require("@angular/platform-browser");
var hammerjs_1 = require("hammerjs");
var HammerConfig = /** @class */ (function (_super) {
    __extends(HammerConfig, _super);
    function HammerConfig() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.overrides = {
            swipe: { direction: hammerjs_1.DIRECTION_ALL }
        };
        return _this;
    }
    HammerConfig = __decorate([
        core_2.Injectable()
    ], HammerConfig);
    return HammerConfig;
}(platform_browser_2.HammerGestureConfig));
exports.HammerConfig = HammerConfig;
common_1.registerLocaleData(en_1["default"], "en");
common_1.registerLocaleData(pt_1["default"], "pt-BR", pt_2["default"]);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                core_module_1.CoreModule,
                resume_module_1.ResumeModule,
                page_not_found_module_1.PageNotFoundModule,
                page_not_found_routing_module_1.PageNotFoundRoutingModule,
                compat_1.AngularFireModule.initializeApp(environment_1.environment.firebaseConfig),
                database_1.AngularFireDatabaseModule,
                analytics_1.AngularFireAnalyticsModule,
                platform_browser_2.HammerModule,
            ],
            declarations: [app_component_1.AppComponent],
            bootstrap: [app_component_1.AppComponent],
            providers: [
                {
                    provide: platform_browser_2.HAMMER_GESTURE_CONFIG,
                    useClass: HammerConfig
                },
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
