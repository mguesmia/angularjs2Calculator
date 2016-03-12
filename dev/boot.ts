import {bootstrap} from 'angular2/platform/browser';
import {AppComponent} from "./app.component";
import {CalculatorModel} from "./button.model/CalculatorModel";
import {OperationMap} from "./calculator.operation/OperationMap";
import {ButtonsService} from "./button.service/buttons.service";
import {HTTP_BINDINGS} from "angular2/http";

bootstrap(AppComponent,[CalculatorModel,OperationMap,HTTP_BINDINGS]) ;
