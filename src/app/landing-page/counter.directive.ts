import { Directive, HostListener, ElementRef } from "@angular/core";

@Directive({ selector: "a[counting]" })
export class CountClicks {
  constructor(elr: ElementRef) {
    elr.nativeElement.style.background = "pink";
  }
  numberOfClicks = 1;
  number: any;
  store: any;
  getValue: any;

  @HostListener("click", ["$event.target"])
  onClick(a): void {
    a.innerHTML = `Likes ${this.numberOfClicks++}`;
    this.number = this.numberOfClicks + 1;
    // console.log(localStorage.getItem(a.id));
    if (sessionStorage.getItem(a.id)) {
      this.number = sessionStorage.getItem(a.id);
      // sessionStorage.clear()
    }
    this.store = sessionStorage.setItem(a.id, a.innerHTML);
    this.getValue = sessionStorage.getItem(a.id);
    a.innerHTML = this.getValue;
    // console.log("button", btn.id, "number of clicks:", this.numberOfClicks++);
  }
}