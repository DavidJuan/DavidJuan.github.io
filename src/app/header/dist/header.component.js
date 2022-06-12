"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.HeaderComponent = void 0;
var core_1 = require("@angular/core");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(locale, renderer, ngNavigatorShareService) {
        this.locale = locale;
        this.renderer = renderer;
        this.ngNavigatorShareService = ngNavigatorShareService;
    }
    Object.defineProperty(HeaderComponent.prototype, "activeSection", {
        // use getter setter to define the properties
        get: function () {
            return this._activeSection;
        },
        set: function (value) {
            this._activeSection = value;
            this.updateNavigation();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HeaderComponent.prototype, "pageXOffset", {
        get: function () {
            return this._pageXOffset;
        },
        set: function (value) {
            this._pageXOffset = value;
            this.onDetectScreenSize();
        },
        enumerable: false,
        configurable: true
    });
    HeaderComponent.prototype.ngAfterViewInit = function () {
        // Share button available only for browsers that do support it.
        if (this.ngNavigatorShareService.canShare()) {
            this.shareBtn.nativeElement.style.display = "block";
        }
    };
    HeaderComponent.prototype.ngOnInit = function () {
        this.faBars = free_solid_svg_icons_1.faBars;
        this.faShareAlt = free_solid_svg_icons_1.faShareAlt;
        this.faCloudDownloadAlt = free_solid_svg_icons_1.faCloudDownloadAlt;
        this.cvPath = "assets/David-Juan-pt.pdf";
        this.titleCv = "Baixar Curriculo em PDF";
    };
    HeaderComponent.prototype.updateNavigation = function () {
        if (this._activeSection && this.renderer) {
            // Remove any selected anchor
            var activePreviousElem = this.nav.nativeElement.querySelector("a.active");
            if (activePreviousElem) {
                this.renderer.removeClass(activePreviousElem, "active");
            }
            var targetElem = this.nav.nativeElement.querySelector("a[href^=\"#" + this._activeSection + "\"]");
            if (targetElem) {
                this.renderer.addClass(targetElem, "active");
            }
        }
    };
    /*
     * For media types such as tablets and mobile devices, the nav-bar navigation should be
     * collapsed by default.
     */
    HeaderComponent.prototype.onDetectScreenSize = function () {
        this.hasMenuToggled = this.pageXOffset > 1024;
    };
    HeaderComponent.prototype.onToggleBar = function () {
        this.hasMenuToggled = !this.hasMenuToggled;
    };
    HeaderComponent.prototype.resetMenu = function () {
        this.hasMenuToggled = this.pageXOffset > 1024;
    };
    HeaderComponent.prototype.share = function () {
        return __awaiter(this, void 0, void 0, function () {
            var error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.ngNavigatorShareService.share({
                                title: "Live Resume - David Juan",
                                text: "Hello, I'm a Full-stack Java Web Developer with 8+ years of experience designing web and mobile projects. Find out more in my live-resume!",
                                url: "https://davidjuan.github.io"
                            })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        console.log("You app is not shared, reason: ", error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    HeaderComponent.prototype.refCvEn = function () {
        this.cvPath = "assets/David-Juan-en.pdf";
        this.titleCv = "Download Resume as PDF";
    };
    HeaderComponent.prototype.refCvPt = function () {
        this.cvPath = "assets/David-Juan-pt.pdf";
        this.titleCv = "Baixar Curriculo em PDF";
    };
    __decorate([
        core_1.ViewChild("nav")
    ], HeaderComponent.prototype, "nav");
    __decorate([
        core_1.ViewChild("shareBtn")
    ], HeaderComponent.prototype, "shareBtn");
    __decorate([
        core_1.Input()
    ], HeaderComponent.prototype, "pageXOffset");
    __decorate([
        core_1.Input()
    ], HeaderComponent.prototype, "activeSection");
    HeaderComponent = __decorate([
        core_1.Component({
            selector: "app-header",
            templateUrl: "./header.component.html",
            styleUrls: [
                "./header.component.scss",
                "./header.component.responsivity.scss",
            ]
        }),
        __param(0, core_1.Inject(core_1.LOCALE_ID))
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;
