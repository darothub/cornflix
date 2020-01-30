import { HttpService } from './../http.service';
import { Component, OnInit, ElementRef } from "@angular/core";


@Component({
  selector: "app-landing-page",
  templateUrl: "./landing.component.html",
  styleUrls: ["./landing.component.scss"]
})
export class LandingPageComponent implements OnInit {
  constructor(private _http: HttpService, private elRef:ElementRef) {}
  movies: Object;
  title = "CORNFLIX";
  ids:any;
  storage:any;
  public likeCounter: number = 0;
  ngOnInit() {
    this._http.getMovies().subscribe(data => {
      this.movies = data;

    });
    // this.storage = sessionStorage
    // console.log(this.storage)
  }
  
}
