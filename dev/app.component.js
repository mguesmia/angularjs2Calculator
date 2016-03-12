var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("angular2/core");
var number_component_1 = require("./button.components/number.component");
var CalculatorModel_1 = require("./button.model/CalculatorModel");
var buttons_service_1 = require("./button.service/buttons.service");
var AppComponent = (function () {
    function AppComponent(model, operationMap, buttonsService) {
        this.model = model;
        this.operationMap = operationMap;
        this.buttonsService = buttonsService;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.getButtons();
    };
    AppComponent.prototype.getButtons = function () {
        var _this = this;
        this.buttonsService.getButtons()
            .subscribe(function (buttonsArray) { return _this.buttonsArray = buttonsArray; }, function (error) { return console.error('Error: ' + error); }, function () { return _this.buttonsArray[0]; });
    };
    AppComponent.prototype.displayResult = function (numb) {
        this.result = this.model.setValue(numb, this.operationMap);
    };
    AppComponent = __decorate([
        core_1.Component({
            providers: [CalculatorModel_1.CalculatorModel, buttons_service_1.ButtonsService],
            selector: 'calculator',
            template: "\n    <div>\n        <tr *ngFor=\"#array of buttonsArray\">\n            <td  *ngFor=\"#ob of array\">\n                <numberButton [numb]='ob' (resultChanged)=\"displayResult($event)\"></numberButton>\n            </td>\n        </tr>\n    </div>\n    <input type=\"text\" class=\"calcText\" value=\"{{result}}\">\n\n    ",
            styleUrls: ["../src/css/app.css"],
            directives: [number_component_1.ButtonNumberComponent]
        })
    ], AppComponent);
    return AppComponent;
})();
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map