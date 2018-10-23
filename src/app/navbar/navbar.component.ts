import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public navbarMenu:string  = 'MENU';

  public handleSliderClick = (top, middle, bottom) => {
    let body = document.getElementsByTagName('body')[0];
    let overlay = document.getElementById('slider-overlay');
    if(this.navbarMenu === 'MENU') {
      this.navbarMenu = 'CLOSE';
      overlay.classList.add('slider-on');
      body.classList.add('overflow-hide');
      top.classList.add('active');
      middle.classList.add('active');
      bottom.classList.add('active');
    } else {
      this.navbarMenu = 'MENU';
      overlay.classList.remove('slider-on');
      body.classList.remove('overflow-hide');
      top.classList.remove('active');
      middle.classList.remove('active');
      bottom.classList.remove('active');
    }
  }

}
