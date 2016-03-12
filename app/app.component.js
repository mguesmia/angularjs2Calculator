System.register(["angular2/core", "./button.components/number.component", "./button.model/CalculatorModel", "./calculator.operation/OperationMap", "./button.service/buttons.service"], function(exports_1, context_1) {
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
    var core_1, number_component_1, CalculatorModel_1, OperationMap_1, buttons_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (number_component_1_1) {
                number_component_1 = number_component_1_1;
            },
            function (CalculatorModel_1_1) {
                CalculatorModel_1 = CalculatorModel_1_1;
            },
            function (OperationMap_1_1) {
                OperationMap_1 = OperationMap_1_1;
            },
            function (buttons_service_1_1) {
                buttons_service_1 = buttons_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
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
                    }), 
                    __metadata('design:paramtypes', [CalculatorModel_1.CalculatorModel, OperationMap_1.OperationMap, buttons_service_1.ButtonsService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUEyQkE7Z0JBSUksc0JBQW9CLEtBQXFCLEVBQ3JCLFlBQXlCLEVBQ3pCLGNBQTZCO29CQUY3QixVQUFLLEdBQUwsS0FBSyxDQUFnQjtvQkFDckIsaUJBQVksR0FBWixZQUFZLENBQWE7b0JBQ3pCLG1CQUFjLEdBQWQsY0FBYyxDQUFlO2dCQUFHLENBQUM7Z0JBR3JELCtCQUFRLEdBQVI7b0JBQ0ksSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO2dCQUN0QixDQUFDO2dCQUlELGlDQUFVLEdBQVY7b0JBQUEsaUJBTUM7b0JBTEcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLEVBQUU7eUJBQzNCLFNBQVMsQ0FDTixVQUFBLFlBQVksSUFBSSxPQUFBLEtBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxFQUFoQyxDQUFnQyxFQUNoRCxVQUFBLEtBQUssSUFBSSxPQUFBLE9BQU8sQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxFQUFoQyxDQUFnQyxFQUN6QyxjQUFPLE9BQUEsS0FBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFBcEIsQ0FBb0IsQ0FBQyxDQUFDO2dCQUN6QyxDQUFDO2dCQUdELG9DQUFhLEdBQWIsVUFBYyxJQUFJO29CQUNkLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDOUQsQ0FBQztnQkE5Q0w7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxTQUFTLEVBQUUsQ0FBQyxpQ0FBZSxFQUFDLGdDQUFjLENBQUM7d0JBRTNDLFFBQVEsRUFBRSxZQUFZO3dCQUN0QixRQUFRLEVBQUUsc1VBVVQ7d0JBQ0QsU0FBUyxFQUFDLENBQUMsb0JBQW9CLENBQUM7d0JBQ2hDLFVBQVUsRUFBQyxDQUFDLHdDQUFxQixDQUFDO3FCQUVyQyxDQUFDOztnQ0FBQTtnQkFnQ0YsbUJBQUM7WUFBRCxDQTlCQSxBQThCQyxJQUFBO1lBOUJELHVDQThCQyxDQUFBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuaW1wb3J0IHtCdXR0b25OdW1iZXJDb21wb25lbnR9IGZyb20gXCIuL2J1dHRvbi5jb21wb25lbnRzL251bWJlci5jb21wb25lbnRcIjtcbmltcG9ydCB7Q2FsY3VsYXRvck1vZGVsfSBmcm9tIFwiLi9idXR0b24ubW9kZWwvQ2FsY3VsYXRvck1vZGVsXCI7XG5pbXBvcnQge09wZXJhdGlvbk1hcH0gZnJvbSBcIi4vY2FsY3VsYXRvci5vcGVyYXRpb24vT3BlcmF0aW9uTWFwXCI7XG5pbXBvcnQge0J1dHRvbnNTZXJ2aWNlfSBmcm9tIFwiLi9idXR0b24uc2VydmljZS9idXR0b25zLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgcHJvdmlkZXJzOiBbQ2FsY3VsYXRvck1vZGVsLEJ1dHRvbnNTZXJ2aWNlXSAsXG5cbiAgICBzZWxlY3RvcjogJ2NhbGN1bGF0b3InLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgPGRpdj5cbiAgICAgICAgPHRyICpuZ0Zvcj1cIiNhcnJheSBvZiBidXR0b25zQXJyYXlcIj5cbiAgICAgICAgICAgIDx0ZCAgKm5nRm9yPVwiI29iIG9mIGFycmF5XCI+XG4gICAgICAgICAgICAgICAgPG51bWJlckJ1dHRvbiBbbnVtYl09J29iJyAocmVzdWx0Q2hhbmdlZCk9XCJkaXNwbGF5UmVzdWx0KCRldmVudClcIj48L251bWJlckJ1dHRvbj5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgIDwvdHI+XG4gICAgPC9kaXY+XG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJjYWxjVGV4dFwiIHZhbHVlPVwie3tyZXN1bHR9fVwiPlxuXG4gICAgYCxcbiAgICBzdHlsZVVybHM6W1wiLi4vc3JjL2Nzcy9hcHAuY3NzXCJdLFxuICAgIGRpcmVjdGl2ZXM6W0J1dHRvbk51bWJlckNvbXBvbmVudF1cblxufSlcblxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG4gICAgcHJpdmF0ZSByZXN1bHQ6c3RyaW5nO1xuICAgIHByaXZhdGUgYnV0dG9uc0FycmF5O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBtb2RlbDpDYWxjdWxhdG9yTW9kZWwsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBvcGVyYXRpb25NYXA6T3BlcmF0aW9uTWFwLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgYnV0dG9uc1NlcnZpY2U6QnV0dG9uc1NlcnZpY2UpeyB9XG5cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmdldEJ1dHRvbnMoKTtcbiAgICB9XG5cblxuXG4gICAgZ2V0QnV0dG9ucygpe1xuICAgICAgICB0aGlzLmJ1dHRvbnNTZXJ2aWNlLmdldEJ1dHRvbnMoKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICBidXR0b25zQXJyYXkgPT4gdGhpcy5idXR0b25zQXJyYXkgPSBidXR0b25zQXJyYXksXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5lcnJvcignRXJyb3I6ICcgKyBlcnJvciksXG4gICAgICAgICAgICAgICAgKCkgPT4gIHRoaXMuYnV0dG9uc0FycmF5WzBdKTtcbiAgICB9XG5cblxuICAgIGRpc3BsYXlSZXN1bHQobnVtYil7XG4gICAgICAgIHRoaXMucmVzdWx0ID0gdGhpcy5tb2RlbC5zZXRWYWx1ZShudW1iLHRoaXMub3BlcmF0aW9uTWFwKTtcbiAgICB9XG5cblxuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
