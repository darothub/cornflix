import { OnInit } from '@angular/core';
import { Component, Directive, HostListener } from '@angular/core';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  counter: number = 0;
  title = "mdb-angular-free";

  ngOnInit() {}
  counting() {
    this.counter += 1;
  }
}
