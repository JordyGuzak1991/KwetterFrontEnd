import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {AuthService} from "../auth/auth.service";
import {ApiService} from "../api/api.service";
import {Kweet} from "../../models/kweet";

@Injectable()
export class KweetService {

  constructor(private http: Http, private auth: AuthService, private api: ApiService) {
  }

  postKweet(kweet: Kweet) {
    return this.http.post(this.api.baseUrl + '/kweet/create', kweet, this.auth.jwt()).map((response: Response) => response.json());
  }

  getAll(username: string) {
    return this.http.get(this.api.baseUrl + '/kweet/all/' + username, this.auth.jwt()).map((response: Response) => response.json());
  }

  getRecent(username: string) {
    return this.http.get(this.api.baseUrl + '/kweet/recent/' + username, this.auth.jwt()).map((response: Response) => response.json());
  }

  getTimeline(username: string) {
    return this.http.get(this.api.baseUrl + '/kweet/timeline/' + username, this.auth.jwt()).map((response: Response) => response.json());
  }

}
