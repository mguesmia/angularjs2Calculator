/**
 * Created by mguesmia on 2/26/2016.
 */
System.register(["angular2/core", "../button.model/CalculatorModel"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, core_2, CalculatorModel_1, core_3;
    var ButtonNumberComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
                core_3 = core_1_1;
            },
            function (CalculatorModel_1_1) {
                CalculatorModel_1 = CalculatorModel_1_1;
            }],
        execute: function() {
            ButtonNumberComponent = (function () {
                function ButtonNumberComponent() {
                    this.resultChanged = new core_1.EventEmitter();
                }
                ButtonNumberComponent.prototype.buttonClick = function () {
                    this.resultChanged.emit(this.numb);
                };
                __decorate([
                    core_2.Input(), 
                    __metadata('design:type', Object)
                ], ButtonNumberComponent.prototype, "numb", void 0);
                __decorate([
                    core_3.Output(), 
                    __metadata('design:type', Object)
                ], ButtonNumberComponent.prototype, "resultChanged", void 0);
                ButtonNumberComponent = __decorate([
                    core_1.Component({
                        providers: [CalculatorModel_1.CalculatorModel],
                        selector: 'numberButton',
                        template: "\n        <button type=\"button\" class=\"btn-custom\" (click)=\"buttonClick()\">{{numb.label}} </button>\n    ",
                        styleUrls: ["../src/css/app.css"]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ButtonNumberComponent);
                return ButtonNumberComponent;
            }());
            exports_1("ButtonNumberComponent", ButtonNumberComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1dHRvbi5jb21wb25lbnRzL251bWJlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBa0JIO2dCQUFBO29CQUVjLGtCQUFhLEdBQUcsSUFBSSxtQkFBWSxFQUFVLENBQUM7Z0JBT3pELENBQUM7Z0JBSkcsMkNBQVcsR0FBWDtvQkFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBRSxJQUFJLENBQUMsSUFBSSxDQUFFLENBQUM7Z0JBQ3pDLENBQUM7Z0JBTkQ7b0JBQUMsWUFBSyxFQUFFOzttRUFBQTtnQkFDUjtvQkFBQyxhQUFNLEVBQUU7OzRFQUFBO2dCQVhiO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsU0FBUyxFQUFFLENBQUMsaUNBQWUsQ0FBQzt3QkFDNUIsUUFBUSxFQUFFLGNBQWM7d0JBQ3hCLFFBQVEsRUFBRSxpSEFFVDt3QkFDRCxTQUFTLEVBQUMsQ0FBQyxvQkFBb0IsQ0FBQztxQkFDbkMsQ0FBQzs7eUNBQUE7Z0JBV0YsNEJBQUM7WUFBRCxDQVRBLEFBU0MsSUFBQTtZQVRELHlEQVNDLENBQUEiLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudHMvbnVtYmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IG1ndWVzbWlhIG9uIDIvMjYvMjAxNi5cclxuICovXHJcblxyXG5cclxuaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlcn0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcclxuaW1wb3J0IHtJbnB1dH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcclxuaW1wb3J0IHtDYWxjdWxhdG9yTW9kZWx9IGZyb20gXCIuLi9idXR0b24ubW9kZWwvQ2FsY3VsYXRvck1vZGVsXCI7XHJcbmltcG9ydCB7T3V0cHV0fSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xyXG5pbXBvcnQge09wZXJhdGlvbk1hcH0gZnJvbSBcIi4uL2NhbGN1bGF0b3Iub3BlcmF0aW9uL09wZXJhdGlvbk1hcFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBwcm92aWRlcnM6IFtDYWxjdWxhdG9yTW9kZWxdLFxyXG4gICAgc2VsZWN0b3I6ICdudW1iZXJCdXR0b24nLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0bi1jdXN0b21cIiAoY2xpY2spPVwiYnV0dG9uQ2xpY2soKVwiPnt7bnVtYi5sYWJlbH19IDwvYnV0dG9uPlxyXG4gICAgYCxcclxuICAgIHN0eWxlVXJsczpbXCIuLi9zcmMvY3NzL2FwcC5jc3NcIl1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBCdXR0b25OdW1iZXJDb21wb25lbnR7XHJcbiAgICBASW5wdXQoKSBudW1iO1xyXG4gICAgQE91dHB1dCgpIHJlc3VsdENoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcclxuXHJcblxyXG4gICAgYnV0dG9uQ2xpY2soKXtcclxuICAgICAgICB0aGlzLnJlc3VsdENoYW5nZWQuZW1pdCggdGhpcy5udW1iICk7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
