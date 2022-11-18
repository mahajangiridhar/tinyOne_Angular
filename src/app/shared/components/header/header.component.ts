import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  socialIcons= ['<i class="fab fa-apple"></i>', '<i class="fab fa-android"></i>', '<i class="fab fa-windows"></i>']
  constructor() { }

  ngOnInit(): void {
  }

}
