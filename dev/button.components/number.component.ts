/**
 * Created by mguesmia on 2/26/2016.
 */


import {Component, EventEmitter} from "angular2/core";
import {Input} from "angular2/core";
import {CalculatorModel} from "../button.model/CalculatorModel";
import {Output} from "angular2/core";
import {OperationMap} from "../calculator.operation/OperationMap";

@Component({
    providers: [CalculatorModel],
    selector: 'numberButton',
    template: `
        <button type="button" class="btn-custom" (click)="buttonClick()">{{numb.label}} </button>
    `,
    styleUrls:["../src/css/app.css"]
})

export class ButtonNumberComponent{
    @Input() numb;
    @Output() resultChanged = new EventEmitter<string>();


    buttonClick(){
        this.resultChanged.emit( this.numb );
    }

}
