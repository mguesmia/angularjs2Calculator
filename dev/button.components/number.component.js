/**
 * Created by mguesmia on 2/26/2016.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("angular2/core");
var core_2 = require("angular2/core");
var CalculatorModel_1 = require("../button.model/CalculatorModel");
var core_3 = require("angular2/core");
var ButtonNumberComponent = (function () {
    function ButtonNumberComponent() {
        this.resultChanged = new core_1.EventEmitter();
    }
    ButtonNumberComponent.prototype.buttonClick = function () {
        this.resultChanged.emit(this.numb);
    };
    __decorate([
        core_2.Input()
    ], ButtonNumberComponent.prototype, "numb", void 0);
    __decorate([
        core_3.Output()
    ], ButtonNumberComponent.prototype, "resultChanged", void 0);
    ButtonNumberComponent = __decorate([
        core_1.Component({
            providers: [CalculatorModel_1.CalculatorModel],
            selector: 'numberButton',
            template: "\n        <button type=\"button\" class=\"btn-custom\" (click)=\"buttonClick()\">{{numb.label}} </button>\n    ",
            styleUrls: ["../src/css/app.css"]
        })
    ], ButtonNumberComponent);
    return ButtonNumberComponent;
})();
exports.ButtonNumberComponent = ButtonNumberComponent;
//# sourceMappingURL=number.component.js.map