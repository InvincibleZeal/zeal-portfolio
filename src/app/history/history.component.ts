import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  history = "I'm Ritesh Ganjewala, a Web Developer and Programmer, born and raised in Indore, M.P., currently pursuing B.Tech in Computer Science and Engineering at National Institute of Technology Srinagar. I attended St. Theresa's Sr. Sec. School and Burhanpur Public School where I completed my SSC and HSC respectively. I have a great interest in Web Technologies and Artificial Intelligence. I generally do watch movies and web series. Do you like Sacred Games. Yeah me too!";

  shortHistory = "I'm Ritesh Ganjewala, a Web Developer and Programmer, born and raised in Indore, M.P., currently pursuing blah blah blah. I love watching movies and web series, do you love watching'em too?"
}
