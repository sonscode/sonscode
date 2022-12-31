import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MarksApiService {

  constructor(private http: HttpClient, private router: Router) { }

private homeUrl = "http://localhost:8080/api/home";
private marksUrl = "http://localhost:8080/api/marks";

getMarksfromApi(){
  return this.http.get<any>(this.marksUrl)
}

getHomeData(){
  return this.http.get<any>(this.homeUrl)
}


}
