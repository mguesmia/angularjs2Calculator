System.register(["./substraction", "./Multiplication", "./division", "./addition"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var substraction_1, Multiplication_1, division_1, addition_1;
    var OperationMap;
    return {
        setters:[
            function (substraction_1_1) {
                substraction_1 = substraction_1_1;
            },
            function (Multiplication_1_1) {
                Multiplication_1 = Multiplication_1_1;
            },
            function (division_1_1) {
                division_1 = division_1_1;
            },
            function (addition_1_1) {
                addition_1 = addition_1_1;
            }],
        execute: function() {
            OperationMap = (function () {
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
            }());
            exports_1("OperationMap", OperationMap);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbGN1bGF0b3Iub3BlcmF0aW9uL09wZXJhdGlvbk1hcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU1BO2dCQUlJO29CQUhBLFFBQUcsR0FBMkIsSUFBSSxHQUFHLEVBQXFCLENBQUM7b0JBSXZELElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBQyxJQUFJLG1CQUFRLEVBQUUsQ0FBQyxDQUFDO29CQUNqQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUMsSUFBSSxtQkFBUSxFQUFFLENBQUMsQ0FBQztvQkFDakMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFDLElBQUksK0JBQWMsRUFBRSxDQUFDLENBQUM7b0JBQ3ZDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBQyxJQUFJLDJCQUFZLEVBQUUsQ0FBQyxDQUFDO2dCQUN6QyxDQUFDO2dCQUVELDZCQUFNLEdBQU4sVUFBTyxHQUFVO29CQUNiLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDN0IsQ0FBQztnQkFDTCxtQkFBQztZQUFELENBZEEsQUFjQyxJQUFBO1lBZEQsdUNBY0MsQ0FBQSIsImZpbGUiOiJjYWxjdWxhdG9yLm9wZXJhdGlvbi9PcGVyYXRpb25NYXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1N1YnN0cmFjdGlvbn0gZnJvbSBcIi4vc3Vic3RyYWN0aW9uXCI7XHJcbmltcG9ydCB7TXVsdGlwbGljYXRpb259IGZyb20gXCIuL011bHRpcGxpY2F0aW9uXCI7XHJcbmltcG9ydCB7RGl2aXNpb259IGZyb20gXCIuL2RpdmlzaW9uXCI7XHJcbmltcG9ydCB7QWRkaXRpb259IGZyb20gXCIuL2FkZGl0aW9uXCI7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIE9wZXJhdGlvbk1hcHtcclxuICAgIG1hcDogTWFwPHN0cmluZywgT3BlcmF0aW9uPiA9IG5ldyBNYXA8c3RyaW5nLCBPcGVyYXRpb24+KCk7XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgdGhpcy5tYXAuc2V0KFwiK1wiLG5ldyBBZGRpdGlvbigpKTtcclxuICAgICAgICB0aGlzLm1hcC5zZXQoXCIvXCIsbmV3IERpdmlzaW9uKCkpO1xyXG4gICAgICAgIHRoaXMubWFwLnNldChcIipcIixuZXcgTXVsdGlwbGljYXRpb24oKSk7XHJcbiAgICAgICAgdGhpcy5tYXAuc2V0KFwiLVwiLG5ldyBTdWJzdHJhY3Rpb24oKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TWFwKGtleTpzdHJpbmcpOk9wZXJhdGlvbntcclxuICAgICAgICByZXR1cm4gdGhpcy5tYXAuZ2V0KGtleSk7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
