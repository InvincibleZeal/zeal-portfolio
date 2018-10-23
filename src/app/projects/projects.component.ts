import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public projects = [
    {
      name: "webyte",
      specification: "GSAP SVG Animmations",
      image: "webyte.png",
      url: "https://www.github.com/InvincibleZeal/webyte"
    },
    {
      name: "React-To-Do",
      specification: "ReactJS & json-server",
      image: "reacttodo.png",
      url: "https://www.github.com/InvincibleZeal/ReactTodo"
    },
    {
      name: "techvaganza",
      specification: "Bootstrap & GSAP Animations",
      image: "techvaganza.png",
      url: "https://www.github.com/InvincibleZeal/Techvaganza"
    },
    {
      name: "datamanager",
      specification: "Bootstrap, AJAX & PHP",
      image: "datamanager.png",
      url: "https://www.github.com/InvincibleZeal/datamanager"
    },
    {
      name: "bookmarker",
      specification: "Local Storage & AJAX",
      image: "bookmarker.png",
      url: "https://www.github.com/InvincibleZeal/bookmarker"
    },
    {
      name: "Idea-Challenge",
      specification: "On Scroll Animations",
      image: "IIEDC.png",
      url: "https://www.github.com/InvincibleZeal/IIEDC"
    }
  ]
}
