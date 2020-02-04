import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = "https://www.reddit.com/r/aww/.json";

  constructor(private http: HttpClient) {}

  getAwws(){
    return this.http.get(this.baseUrl); 
  }

}
