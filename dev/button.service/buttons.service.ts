/**
 * Created by mguesmia on 3/12/2016.
 */
import {Injectable} from 'angular2/core';
import { Http } from 'angular2/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ButtonsService{

    constructor(public http: Http) {}

    getButtons(){
        return  this.http.get('./app/data/buttons.json').map(response => response.json()) ;
    }


}