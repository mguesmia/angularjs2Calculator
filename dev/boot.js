var browser_1 = require('angular2/platform/browser');
var app_component_1 = require("./app.component");
var CalculatorModel_1 = require("./button.model/CalculatorModel");
var OperationMap_1 = require("./calculator.operation/OperationMap");
var http_1 = require("angular2/http");
browser_1.bootstrap(app_component_1.AppComponent, [CalculatorModel_1.CalculatorModel, OperationMap_1.OperationMap, http_1.HTTP_BINDINGS]);
//# sourceMappingURL=boot.js.map