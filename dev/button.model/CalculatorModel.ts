import {Addition} from "../calculator.operation/addition";
import {Division} from "../calculator.operation/division";
import {Multiplication} from "../calculator.operation/Multiplication";
import {Substraction} from "../calculator.operation/substraction";
import {OperationMap} from "../calculator.operation/OperationMap";
/**
 * Created by mguesmia on 3/8/2016.
 */

export class CalculatorModel{
     private inputValue : string = null;
     private numberValue : number;
     private op:string = null;
     private type:string;


    setValue(numb:any,operationMap:OperationMap):string{
        switch (numb.type){
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
    }


    handleResult(operationMap:OperationMap){
        var operation : Operation = operationMap.getMap(this.op);
        var number2 = + this.inputValue;
        this.inputValue = operation.runOperation(this.numberValue,number2);
    }

    handleOperation(op:string){
        this.numberValue  = + this.inputValue;
        this.inputValue = null;
        this.op = op;
    }

    handleNumber(number:string) {
        if( this.inputValue == null ){
            this.inputValue =  number;
        }else if( this.inputValue != null ){
            this.inputValue = this.inputValue +  number
        }
    }

    reset(){
        this.inputValue = null;
    }
}