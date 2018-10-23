import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public expand = (e, target) => {
    target.classList.add('expand');
    e.target.classList.add('expand');
  }

  public collapse = (e, target) => {
    target.classList.remove('expand');
    e.target.classList.remove('expand');
  }
}
