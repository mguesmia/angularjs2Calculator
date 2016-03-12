System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var CalculatorModel;
    return {
        setters:[],
        execute: function() {
            /**
             * Created by mguesmia on 3/8/2016.
             */
            CalculatorModel = (function () {
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
            }());
            exports_1("CalculatorModel", CalculatorModel);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1dHRvbi5tb2RlbC9DYWxjdWxhdG9yTW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztZQUtBOztlQUVHO1lBRUg7Z0JBQUE7b0JBQ2EsZUFBVSxHQUFZLElBQUksQ0FBQztvQkFFM0IsT0FBRSxHQUFVLElBQUksQ0FBQztnQkE0QzlCLENBQUM7Z0JBeENHLGtDQUFRLEdBQVIsVUFBUyxJQUFRLEVBQUMsWUFBeUI7b0JBQ3ZDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQSxDQUFDO3dCQUNmLEtBQUssR0FBRzs0QkFDSixJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxDQUFDOzRCQUNoQyxLQUFLLENBQUM7d0JBQ1YsS0FBSyxHQUFHOzRCQUNKLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDOzRCQUN0QyxLQUFLLENBQUM7d0JBQ1YsS0FBSyxHQUFHOzRCQUNKLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDOzRCQUNqQyxLQUFLLENBQUM7d0JBQ1YsUUFBUTtvQkFDWixDQUFDO29CQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO2dCQUMzQixDQUFDO2dCQUdELHNDQUFZLEdBQVosVUFBYSxZQUF5QjtvQkFDbEMsSUFBSSxTQUFTLEdBQWUsWUFBWSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7b0JBQ3pELElBQUksT0FBTyxHQUFHLENBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQztvQkFDaEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ3ZFLENBQUM7Z0JBRUQseUNBQWUsR0FBZixVQUFnQixFQUFTO29CQUNyQixJQUFJLENBQUMsV0FBVyxHQUFJLENBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQztvQkFDdEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7b0JBQ3ZCLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO2dCQUNqQixDQUFDO2dCQUVELHNDQUFZLEdBQVosVUFBYSxNQUFhO29CQUN0QixFQUFFLENBQUEsQ0FBRSxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUssQ0FBQyxDQUFBLENBQUM7d0JBQzFCLElBQUksQ0FBQyxVQUFVLEdBQUksTUFBTSxDQUFDO29CQUM5QixDQUFDO29CQUFBLElBQUksQ0FBQyxFQUFFLENBQUEsQ0FBRSxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUssQ0FBQyxDQUFBLENBQUM7d0JBQ2hDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBSSxNQUFNLENBQUE7b0JBQy9DLENBQUM7Z0JBQ0wsQ0FBQztnQkFFRCwrQkFBSyxHQUFMO29CQUNJLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO2dCQUMzQixDQUFDO2dCQUNMLHNCQUFDO1lBQUQsQ0EvQ0EsQUErQ0MsSUFBQTtZQS9DRCw2Q0ErQ0MsQ0FBQSIsImZpbGUiOiJidXR0b24ubW9kZWwvQ2FsY3VsYXRvck1vZGVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBZGRpdGlvbn0gZnJvbSBcIi4uL2NhbGN1bGF0b3Iub3BlcmF0aW9uL2FkZGl0aW9uXCI7XHJcbmltcG9ydCB7RGl2aXNpb259IGZyb20gXCIuLi9jYWxjdWxhdG9yLm9wZXJhdGlvbi9kaXZpc2lvblwiO1xyXG5pbXBvcnQge011bHRpcGxpY2F0aW9ufSBmcm9tIFwiLi4vY2FsY3VsYXRvci5vcGVyYXRpb24vTXVsdGlwbGljYXRpb25cIjtcclxuaW1wb3J0IHtTdWJzdHJhY3Rpb259IGZyb20gXCIuLi9jYWxjdWxhdG9yLm9wZXJhdGlvbi9zdWJzdHJhY3Rpb25cIjtcclxuaW1wb3J0IHtPcGVyYXRpb25NYXB9IGZyb20gXCIuLi9jYWxjdWxhdG9yLm9wZXJhdGlvbi9PcGVyYXRpb25NYXBcIjtcclxuLyoqXHJcbiAqIENyZWF0ZWQgYnkgbWd1ZXNtaWEgb24gMy84LzIwMTYuXHJcbiAqL1xyXG5cclxuZXhwb3J0IGNsYXNzIENhbGN1bGF0b3JNb2RlbHtcclxuICAgICBwcml2YXRlIGlucHV0VmFsdWUgOiBzdHJpbmcgPSBudWxsO1xyXG4gICAgIHByaXZhdGUgbnVtYmVyVmFsdWUgOiBudW1iZXI7XHJcbiAgICAgcHJpdmF0ZSBvcDpzdHJpbmcgPSBudWxsO1xyXG4gICAgIHByaXZhdGUgdHlwZTpzdHJpbmc7XHJcblxyXG5cclxuICAgIHNldFZhbHVlKG51bWI6YW55LG9wZXJhdGlvbk1hcDpPcGVyYXRpb25NYXApOnN0cmluZ3tcclxuICAgICAgICBzd2l0Y2ggKG51bWIudHlwZSl7XHJcbiAgICAgICAgICAgIGNhc2UgJ2UnOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVSZXN1bHQob3BlcmF0aW9uTWFwKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICduJzpcclxuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlTnVtYmVyKFN0cmluZyhudW1iLmxhYmVsKSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnbyc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZU9wZXJhdGlvbihudW1iLmxhYmVsKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5pbnB1dFZhbHVlO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBoYW5kbGVSZXN1bHQob3BlcmF0aW9uTWFwOk9wZXJhdGlvbk1hcCl7XHJcbiAgICAgICAgdmFyIG9wZXJhdGlvbiA6IE9wZXJhdGlvbiA9IG9wZXJhdGlvbk1hcC5nZXRNYXAodGhpcy5vcCk7XHJcbiAgICAgICAgdmFyIG51bWJlcjIgPSArIHRoaXMuaW5wdXRWYWx1ZTtcclxuICAgICAgICB0aGlzLmlucHV0VmFsdWUgPSBvcGVyYXRpb24ucnVuT3BlcmF0aW9uKHRoaXMubnVtYmVyVmFsdWUsbnVtYmVyMik7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlT3BlcmF0aW9uKG9wOnN0cmluZyl7XHJcbiAgICAgICAgdGhpcy5udW1iZXJWYWx1ZSAgPSArIHRoaXMuaW5wdXRWYWx1ZTtcclxuICAgICAgICB0aGlzLmlucHV0VmFsdWUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMub3AgPSBvcDtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVOdW1iZXIobnVtYmVyOnN0cmluZykge1xyXG4gICAgICAgIGlmKCB0aGlzLmlucHV0VmFsdWUgPT0gbnVsbCApe1xyXG4gICAgICAgICAgICB0aGlzLmlucHV0VmFsdWUgPSAgbnVtYmVyO1xyXG4gICAgICAgIH1lbHNlIGlmKCB0aGlzLmlucHV0VmFsdWUgIT0gbnVsbCApe1xyXG4gICAgICAgICAgICB0aGlzLmlucHV0VmFsdWUgPSB0aGlzLmlucHV0VmFsdWUgKyAgbnVtYmVyXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlc2V0KCl7XHJcbiAgICAgICAgdGhpcy5pbnB1dFZhbHVlID0gbnVsbDtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
