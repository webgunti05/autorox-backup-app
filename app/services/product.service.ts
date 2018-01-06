import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()

export class ProductService{

    private ProductList : Array<any>

    constructor(private http:Http){


    }

    getProductList(){
        return this.http.get("assets/data.json")
        .map(data => {
            console.log(data.json())
            return data.json();
        },
         err => {
            return err.json();
        });
    }
}