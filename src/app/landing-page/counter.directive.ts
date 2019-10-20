import { Directive, HostListener } from "@angular/core";

@Directive({ selector: "a[counting]" })


export class CountClicks {
  numberOfClicks = 1;

  @HostListener("click", ["$event.target"])
  onClick(btn) {
    btn.innerHTML = `Likes ${this.numberOfClicks}`
    console.log("button", btn, "number of clicks:", this.numberOfClicks++);
  }
}