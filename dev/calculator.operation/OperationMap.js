var substraction_1 = require("./substraction");
var Multiplication_1 = require("./Multiplication");
var division_1 = require("./division");
var addition_1 = require("./addition");
var OperationMap = (function () {
    function OperationMap() {
        this.map = new Map();
        this.map.set("+", new addition_1.Addition());
        this.map.set("/", new division_1.Division());
        this.map.set("*", new Multiplication_1.Multiplication());
        this.map.set("-", new substraction_1.Substraction());
    }
    OperationMap.prototype.getMap = function (key) {
        return this.map.get(key);
    };
    return OperationMap;
})();
exports.OperationMap = OperationMap;
//# sourceMappingURL=OperationMap.js.map