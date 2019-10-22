import { CountClicks } from './counter.directive';
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
      // for (let x of data['results']){
      //   if(sessionStorage.getItem('#'+x.id) != null){
      //     console.log("#" + x.id);
      //     this.ids = sessionStorage.getItem("#" + x.id);
      //     console.log(this.ids);
      //   }

      // }
      // console.log(this.ids);
    });
    this.storage = sessionStorage
    console.log(this.storage)
  }
  
  // ngAfterViewInit() {
  //    var div = this.elRef.nativeElement;
  //    console.log(div);
  // }
  // print(){
  //   console.log(this)
  // }
}
