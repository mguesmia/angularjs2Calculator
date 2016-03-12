/**
 * Created by mguesmia on 3/8/2016.
 */
var CalculatorModel = (function () {
    function CalculatorModel() {
        this.inputValue = null;
        this.op = null;
    }
    CalculatorModel.prototype.setValue = function (numb, operationMap) {
        switch (numb.type) {
            case 'e':
                this.handleResult(operationMap);
                break;
            case 'n':
                this.handleNumber(String(numb.label));
                break;
            case 'o':
                this.handleOperation(numb.label);
                break;
            default:
        }
        return this.inputValue;
    };
    CalculatorModel.prototype.handleResult = function (operationMap) {
        var operation = operationMap.getMap(this.op);
        var number2 = +this.inputValue;
        this.inputValue = operation.runOperation(this.numberValue, number2);
    };
    CalculatorModel.prototype.handleOperation = function (op) {
        this.numberValue = +this.inputValue;
        this.inputValue = null;
        this.op = op;
    };
    CalculatorModel.prototype.handleNumber = function (number) {
        if (this.inputValue == null) {
            this.inputValue = number;
        }
        else if (this.inputValue != null) {
            this.inputValue = this.inputValue + number;
        }
    };
    CalculatorModel.prototype.reset = function () {
        this.inputValue = null;
    };
    return CalculatorModel;
})();
exports.CalculatorModel = CalculatorModel;
//# sourceMappingURL=CalculatorModel.js.map