import { CountClicks } from './counter.directive';
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
  ids = []
  public likeCounter: number = 0;
  ngOnInit() {
    this._http.getMovies().subscribe(data => {
      this.movies = data;
      for (let x of data['results']){
        sessionStorage.setItem('id', x.id)
        this.ids.push(sessionStorage.getItem('id'))
      }
      console.log(this.ids);
    });
  }
  increaseLikes(value) {
      value +=1
    // this.likeCounter += 1;
    console.log(value)
  }
}
