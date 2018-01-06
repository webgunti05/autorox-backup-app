import { Component,HostListener,Inject } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { DOCUMENT } from "@angular/platform-browser";
import { Router } from '@angular/router';
// import { WINDOW } from "../services/window.service";

@Component({
    selector : 'Header',
    templateUrl : './header.component.html',
    styleUrls : ['./header.component.css'],
    animations: [
        trigger('collapse', [
          state('open', style({
            opacity: '1',
            display: 'block',
            transform: 'translate3d(0, 0, 0)'
          })),
          state('closed',   style({
            opacity: '0',
            display: 'none',
            transform: 'translate3d(0, -100%, 0)'
          })),
          transition('closed => open', animate('200ms ease-in')),
          transition('open => closed', animate('100ms ease-out'))
        ])
      ]
})

export class HeaderComponent{
    siteName : String;
    showSubmenu :boolean = false;
    collapse : String = "closed";

    public hideMenu : boolean;
    public hdrMenu2 : boolean;
    public clicked : boolean;
    public rspBtns : Boolean;

    // constructor(@Inject(DOCUMENT) private document: Document, @Inject(WINDOW) private window: Window){
        constructor(@Inject(DOCUMENT) private document: Document, private router: Router){
        this.siteName = "assets/Autoroxlogo.png";
        this.hideMenu = true;
        this.hdrMenu2 = false;
        this.clicked = false;
        this.rspBtns = false;
    }

    toggleSubMenu(){
        this.showSubmenu = !this.showSubmenu;
    }
    toggleCollapse(){
        this.collapse = this.collapse == "open" ? "closed" : "open";
    }
    openSearchForm(){
        this.clicked = !this.clicked;
    }

    goToSearch(){
        return this.router.navigate(['/', 'search'])
      }
    

    @HostListener("window:scroll", [])
    onWindowScroll() {
        // let number = this.window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
        let number =  this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
            if (number < 10) {
            this.hideMenu = true;
        } else if (this.hideMenu && number > 75) {
            this.hideMenu = false;
        }

        //header2 hidding
        // let number2 = this.window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
        let number2 =  this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
        if(number > 75){
            this.hdrMenu2 = true;
        } else if(this.hdrMenu2 && number2 < 10){
            this.hdrMenu2 = false;
        }

        //rsp buttons hidding

        

    }


}