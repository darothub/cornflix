import { HttpService } from './../http.service';
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-landing-page",
  templateUrl: "./landing.component.html",
  styleUrls: ["./landing.component.scss"]
})
export class LandingPageComponent implements OnInit {
  constructor(private _http: HttpService) {}
  movies: Object;
  ngOnInit() {
    this._http.getMovies().subscribe(data =>{
      this.movies = data
      console.log(this.movies)
    })
  }
}
