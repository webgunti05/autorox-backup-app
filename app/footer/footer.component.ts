import { Component } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'Footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  footerLogo : String;
  postItems : Array<any>
  constructor(private postSvc : PostService) {
    this.footerLogo = "assets/Autoroxlogo.png";
    this.getPostItems();
   }


  getPostItems(){
    this.postSvc.getPostItems()
    .subscribe(result => {
      console.log(result);
      this.postItems = result.postItems;
    })
  }

}
