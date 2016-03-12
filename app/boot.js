System.register(['angular2/platform/browser', "./app.component", "./button.model/CalculatorModel", "./calculator.operation/OperationMap", "angular2/http"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, app_component_1, CalculatorModel_1, OperationMap_1, http_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (CalculatorModel_1_1) {
                CalculatorModel_1 = CalculatorModel_1_1;
            },
            function (OperationMap_1_1) {
                OperationMap_1 = OperationMap_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent, [CalculatorModel_1.CalculatorModel, OperationMap_1.OperationMap, http_1.HTTP_BINDINGS]);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU9BLG1CQUFTLENBQUMsNEJBQVksRUFBQyxDQUFDLGlDQUFlLEVBQUMsMkJBQVksRUFBQyxvQkFBYSxDQUFDLENBQUMsQ0FBRSIsImZpbGUiOiJib290LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtib290c3RyYXB9IGZyb20gJ2FuZ3VsYXIyL3BsYXRmb3JtL2Jyb3dzZXInO1xuaW1wb3J0IHtBcHBDb21wb25lbnR9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcbmltcG9ydCB7Q2FsY3VsYXRvck1vZGVsfSBmcm9tIFwiLi9idXR0b24ubW9kZWwvQ2FsY3VsYXRvck1vZGVsXCI7XG5pbXBvcnQge09wZXJhdGlvbk1hcH0gZnJvbSBcIi4vY2FsY3VsYXRvci5vcGVyYXRpb24vT3BlcmF0aW9uTWFwXCI7XG5pbXBvcnQge0J1dHRvbnNTZXJ2aWNlfSBmcm9tIFwiLi9idXR0b24uc2VydmljZS9idXR0b25zLnNlcnZpY2VcIjtcbmltcG9ydCB7SFRUUF9CSU5ESU5HU30gZnJvbSBcImFuZ3VsYXIyL2h0dHBcIjtcblxuYm9vdHN0cmFwKEFwcENvbXBvbmVudCxbQ2FsY3VsYXRvck1vZGVsLE9wZXJhdGlvbk1hcCxIVFRQX0JJTkRJTkdTXSkgO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
