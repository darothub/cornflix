import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  counter: number = 0;
  public name: string = " hello";
  constructor() {}

  ngOnInit() {}
  counting() {
    this.counter += 1;
  }
}
