import { Injectable } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Http, Headers, Response, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import {ApiService} from "../api/api.service";

@Injectable()
export class AuthService {

  constructor(private route: ActivatedRoute,
              private router: Router,
              private http: Http,
              private api: ApiService) {}

  login(username: string, password: string) {
    return this.http.post(this.api.baseUrl + '/authenticate', JSON.stringify({ username: username, password: password }), this.authHeader(username, password))
      .map((response: Response) => {
        // login successful if there's a jwt token in the response
        let user = response.json();
        if (user && user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
        }
      });
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.router.navigate(['login']);
  }

  authHeader(username: string, password: string) {
    let headers = new Headers({
      'Authorization': 'Basic ' + username + ':' + password,
      'Content-Type': 'application/json'
    });
    return new RequestOptions({ headers: headers });
  }

  jwt() {
    // create authorization header with jwt token
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.token) {
      let headers = new Headers({
        'Authorization': 'Basic ' + btoa(currentUser.token),
        'Content-Type': 'application/json'
      });
      return new RequestOptions({ headers: headers });
    }
  }
}
