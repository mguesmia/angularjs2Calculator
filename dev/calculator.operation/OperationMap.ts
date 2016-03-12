import {Substraction} from "./substraction";
import {Multiplication} from "./Multiplication";
import {Division} from "./division";
import {Addition} from "./addition";


export class OperationMap{
    map: Map<string, Operation> = new Map<string, Operation>();


    constructor(){
        this.map.set("+",new Addition());
        this.map.set("/",new Division());
        this.map.set("*",new Multiplication());
        this.map.set("-",new Substraction());
    }

    getMap(key:string):Operation{
        return this.map.get(key);
    }
}