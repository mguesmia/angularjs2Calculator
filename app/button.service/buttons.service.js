System.register(['angular2/core', 'angular2/http', 'rxjs/add/operator/map'], function(exports_1, context_1) {
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
    var core_1, http_1;
    var ButtonsService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            ButtonsService = (function () {
                function ButtonsService(http) {
                    this.http = http;
                }
                ButtonsService.prototype.getButtons = function () {
                    return this.http.get('./app/data/buttons.json').map(function (response) { return response.json(); });
                };
                ButtonsService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], ButtonsService);
                return ButtonsService;
            }());
            exports_1("ButtonsService", ButtonsService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1dHRvbi5zZXJ2aWNlL2J1dHRvbnMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFRQTtnQkFFSSx3QkFBbUIsSUFBVTtvQkFBVixTQUFJLEdBQUosSUFBSSxDQUFNO2dCQUFHLENBQUM7Z0JBRWpDLG1DQUFVLEdBQVY7b0JBQ0ksTUFBTSxDQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFmLENBQWUsQ0FBQyxDQUFFO2dCQUN2RixDQUFDO2dCQVBMO29CQUFDLGlCQUFVLEVBQUU7O2tDQUFBO2dCQVViLHFCQUFDO1lBQUQsQ0FUQSxBQVNDLElBQUE7WUFURCwyQ0FTQyxDQUFBIiwiZmlsZSI6ImJ1dHRvbi5zZXJ2aWNlL2J1dHRvbnMuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IG1ndWVzbWlhIG9uIDMvMTIvMjAxNi5cclxuICovXHJcbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHAgfSBmcm9tICdhbmd1bGFyMi9odHRwJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQnV0dG9uc1NlcnZpY2V7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHVibGljIGh0dHA6IEh0dHApIHt9XHJcblxyXG4gICAgZ2V0QnV0dG9ucygpe1xyXG4gICAgICAgIHJldHVybiAgdGhpcy5odHRwLmdldCgnLi9hcHAvZGF0YS9idXR0b25zLmpzb24nKS5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKSA7XHJcbiAgICB9XHJcblxyXG5cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
