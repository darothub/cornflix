import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: "root"
})
export class HttpService {
  constructor(private http: HttpClient) {}
  getMovies() {
    return this.http.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=f1e256985ebc2be710bf1f4ed754da11&language=en-US&page=1"
    );
  }
}
