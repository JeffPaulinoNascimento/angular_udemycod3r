"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var RadioComponent = (function () {
    function RadioComponent() {
    }
    RadioComponent_1 = RadioComponent;
    RadioComponent.prototype.ngOnInit = function () {
    };
    RadioComponent.prototype.setValue = function (value) {
        this.value = value;
        this.onChange(value);
    };
    RadioComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    RadioComponent.prototype.writeValue = function (obj) {
        this.value = obj;
    };
    RadioComponent.prototype.registerOnTouched = function (fn) { };
    RadioComponent.prototype.setDisabledState = function (isDisabled) { };
    __decorate([
        core_1.Input()
    ], RadioComponent.prototype, "options", void 0);
    RadioComponent = RadioComponent_1 = __decorate([
        core_1.Component({
            selector: 'mt-radio',
            templateUrl: './radio.component.html',
            providers: [
                {
                    provide: forms_1.NG_VALUE_ACCESSOR,
                    useExisting: core_1.forwardRef(function () { return RadioComponent_1; }),
                    multi: true
                }
            ]
        })
    ], RadioComponent);
    return RadioComponent;
    var RadioComponent_1;
}());
exports.RadioComponent = RadioComponent;
