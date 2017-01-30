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
var core_1 = require('@angular/core');
var CollapseOnClickDirective = (function () {
    function CollapseOnClickDirective() {
        this.isCollapsed = false;
    }
    Object.defineProperty(CollapseOnClickDirective.prototype, "blah", {
        get: function () {
            return this.isCollapsed;
        },
        enumerable: true,
        configurable: true
    });
    CollapseOnClickDirective.prototype.booger = function () {
        this.isCollapsed = !this.isCollapsed;
    };
    __decorate([
        core_1.HostBinding('class.collapsed'), 
        __metadata('design:type', Object)
    ], CollapseOnClickDirective.prototype, "blah", null);
    __decorate([
        core_1.HostListener('click'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], CollapseOnClickDirective.prototype, "booger", null);
    CollapseOnClickDirective = __decorate([
        core_1.Directive({
            selector: '[collapse-on-click]'
        }), 
        __metadata('design:paramtypes', [])
    ], CollapseOnClickDirective);
    return CollapseOnClickDirective;
}());
exports.CollapseOnClickDirective = CollapseOnClickDirective;
//# sourceMappingURL=collapse-on-click.directive.js.map