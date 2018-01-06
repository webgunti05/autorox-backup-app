import { Component, OnInit } from '@angular/core';
import { FilterService } from '../services/data.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'Product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private dropOpen : boolean;
  filterList : Array<any>;
  ProductList : Array<any>;
  private carsList : Array<any>;
  private serviceList : Array<any>

  constructor(private prodSvc : FilterService, private prolistSvc : ProductService) {
    this.dropOpen = false;
    this.filterList = this.prodSvc.getFilterList();
    this.getProductList();
    this.carsList = ["Maruthi Suzuki", "Automobile Part Dealers", "Services-Ford", "Services-Honda", "Automobile Battery Dealers-Exide"];
    this.serviceList = [" Maruti Suzuki", " Automobile Part Dealers", " Services-Ford", "Services-Honda", " Automobile Battery Dealers-Exide"];
   }

  ngOnInit() {
   
  }

  openDropDownList(){
    this.dropOpen = !this.dropOpen;
  }

  getProductList(){
    return this.prolistSvc.getProductList()
    .subscribe(result =>{
      console.log(result);
      this.ProductList = result.ProductList;
    })
  }

  getCarsList(){
    return this.carsList;
  }

  getServiceList(){
    return this.serviceList;
  }

}
