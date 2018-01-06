import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()

export class PostService{

    private postItems : Array<any>
    private postBread : Array<any>
    private carouselTileItems : Array<any>
    constructor(private http:Http){
        
    }

    getPostItems(){
        return this.http.get("assets/data.json")
        .map(data => {
            console.log(data.json())
            return data.json();
        },
        err =>{
            return err.json();
        });
    }

    getPostBread(){
        return this.http.get("assets/data.json")
        .map(data => {
            console.log(data.json())
            return data.json();
        },
    err => {
        return err.json();
    });
    }

    getTileItems(){
        return this.http.get("assets/data.json")
        .map(data => {
         console.log(data.json())
         return data.json();
        },
    err =>{
        return err.json();
    });
    }

}