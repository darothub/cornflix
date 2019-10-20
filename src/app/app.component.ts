import { Component, Directive, HostListener } from '@angular/core';

@Component({
  selector: "app-root",
  template: `
    <app-navbar></app-navbar>
    <app-landing-page></app-landing-page>
  `,
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "mdb-angular-free";
}
