import { Injectable } from '@angular/core';

@Injectable()

export class FilterService {

   private filterList : Array<any>

    constructor(){
        this.filterList = [
            { text : 'Price', value : 'Price'},
            { text : 'Rating', value : 'Rating'},
            { text : 'Popularity', value : 'Popularity'}
        ];
    }

    getFilterList(){
        return this.filterList;
    }
}