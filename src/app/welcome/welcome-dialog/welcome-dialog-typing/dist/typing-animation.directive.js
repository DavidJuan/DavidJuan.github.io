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
exports.__esModule = true;
exports.TypingAnimationDirective = void 0;
var core_1 = require("@angular/core");
var typed_1 = require("./typed");
var TypingAnimationDirective = /** @class */ (function () {
    function TypingAnimationDirective(elRef, locale) {
        this.elRef = elRef;
        this.locale = locale;
        this.phrases = [];
        this._flatMap = function (f, xs) {
            return xs.reduce(function (acc, x) { return acc.concat(f(x)); }, []);
        };
    }
    TypingAnimationDirective.prototype.ngOnInit = function () {
        var _this = this;
        var nestedArr = this.data.filter(function (el) { return el.language === (_this.locale || 'en'); });
        this.phrases.push(this._flatMap(function (el) { return el.phrases; }, nestedArr));
        if (this.checkContent()) {
            this.createTyped();
        }
    };
    TypingAnimationDirective.prototype.checkContent = function () {
        return this.phrases.length > 0;
    };
    TypingAnimationDirective.prototype.createTyped = function () {
        this.typed = new typed_1.Typed(this.elRef.nativeElement, {
            typeSpeed: this.typeSpeed,
            startDelay: this.startDelay,
            phrasePeriod: this.phrasePeriod
        }, this.phrases);
        this.typed.begin();
    };
    __decorate([
        core_1.Input()
    ], TypingAnimationDirective.prototype, "phrasePeriod");
    __decorate([
        core_1.Input()
    ], TypingAnimationDirective.prototype, "typeSpeed");
    __decorate([
        core_1.Input()
    ], TypingAnimationDirective.prototype, "startDelay");
    __decorate([
        core_1.Input()
    ], TypingAnimationDirective.prototype, "data");
    TypingAnimationDirective = __decorate([
        core_1.Directive({
            selector: '[appTypingAnimation]'
        }),
        __param(1, core_1.Inject(core_1.LOCALE_ID))
    ], TypingAnimationDirective);
    return TypingAnimationDirective;
}());
exports.TypingAnimationDirective = TypingAnimationDirective;
