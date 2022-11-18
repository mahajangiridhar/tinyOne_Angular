import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public socialIconArr=[
  {link: "mailto:#", icon :'<i class="fas fa-envelope"></i>'},
  {link: "https://twitter.com/i/flow/login", icon :'<i class="fab fa-twitter-square"></i>'}, 
  {link: "https://www.google.com/", icon :'<i class="fab fa-google-plus-square"></i>'}, 
  {link: "https://in.pinterest.com/" , icon :'<i class="fab fa-pinterest-square"></i>'}]
  footerItems1=["Examples", "Shop", "License"]
  footerItems2=["Contact", "About", "Privacy", "Terms"]
  footerItems3= ["Download", "Support", "Documents"]
  footerItems4= ["Media", "Blog", "Forums"]
  constructor() { }

  ngOnInit(): void {
  }

}
