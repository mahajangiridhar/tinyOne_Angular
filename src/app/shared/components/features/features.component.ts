import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {
public featureArr : any[]= [
  {
    icon: '<i class="fas fa-envelope"></i>',
    heading: "Fully Responsive",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum."
  },
  {
    icon: '<i class="fas fa-lemon"></i>',
    heading: "Fully Layered PSD",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum."
  },
  {
    icon: '<i class="fas fa-folder"></i>',
    heading: "Font Awesome Icons",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum."
  },
  {
    icon: '<i class="fas fa-code"></i>',
    heading: "HTML3 & CSS3",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum."
  },
  {
    icon: '<i class="fas fa-envelope"></i>',
    heading: "Email Template",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum."
  },
  {
    icon: '<i class="fas fa-bookmark"></i>',
    heading: "Free to download",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum."
  }
]
  constructor() { }

  ngOnInit(): void {
  }

}
