import { Component, OnInit } from '@angular/core';
import { NgxCarousel } from 'ngx-carousel';
import { PostService } from '../services/post.service';
import { Router } from '@angular/router';


@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  items: Array<any> = [];
  postBread : Array<any>
  public carouselTileItems: Array<any>;
  public carouselTile: NgxCarousel;

  constructor(private breadSvc: PostService, private tileSvc: PostService, private router : Router) { 
    this.items = [
      { name: 'assets/images/slide1.jpg' },
      { name: 'assets/images/slide1.jpg' },
      { name: 'assets/images/slide1.jpg' },
      { name: 'assets/images/slide1.jpg' },
      { name: 'assets/images/slide1.jpg' },
      { name: 'assets/images/slide1.jpg' },
      { name: 'assets/images/slide1.jpg' },
      { name: 'assets/images/slide1.jpg' },
      { name: 'assets/images/slide1.jpg' },
      { name: 'assets/images/slide1.jpg' },
      { name: 'assets/images/slide1.jpg' },
      { name: 'assets/images/slide1.jpg' }
     
    ];
    this.getPostBread();
    this.getTileItems();

  }

  getPostBread(){
    return this.breadSvc.getPostBread()
    .subscribe(result => {
      console.log(result);
      this.postBread = result.postBread;
    })
  }

  ngOnInit() {
    this.carouselTileItems = [];
 
    this.carouselTile = {
      grid: {xs: 1, sm: 3, md: 3, lg: 4, all: 0},
      slide: 1,
      speed: 400,
      animation: 'lazy',
      point: {
        visible: false
      },
      load: 2,
      touch: true,
      easing: 'ease'
    }
  }

  public carouselTileLoad(evt: any) {
 
    const len = this.carouselTileItems.length
    if (len <= 6) {
      for (let i = len; i < len + 10; i++) {
        this.carouselTileItems.push(i);
      }
    }
 
  }

  getTileItems(){
    return this.tileSvc.getTileItems()
    .subscribe(result => {
      console.log(result);
      this.carouselTileItems = result.carouselTileItems;
    })
  }

  
  goToProductPage(){
    return this.router.navigate(['/', 'Product'])
  }

}
