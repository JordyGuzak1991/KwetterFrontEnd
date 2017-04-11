import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {AuthService} from "../auth/auth.service";
import {User} from "../../models/user";
import {ApiService} from "../api/api.service";

@Injectable()
export class UserService {

  constructor(private http: Http, private auth: AuthService, private api: ApiService) {
  }

  getAll() {
    return this.http.get(this.api.baseUrl + '/user/getAll', this.auth.jwt()).map((response: Response) => response.json());
  }

  getByName(username: string) {
    return this.http.get(this.api.baseUrl + '/user/' + username, this.auth.jwt()).map((response: Response) => response.json());
  }

  getById(id: number) {
    return this.http.get(this.api.baseUrl + '/user/' + id, this.auth.jwt()).map((response: Response) => response.json());
  }

  create(user: User) {
    return this.http.post(this.api.baseUrl + '/user/create', user, this.auth.jwt()).map((response: Response) => response.json());
  }

  update(user: User) {
    return this.http.put(this.api.baseUrl + '/user/' + user.id, user, this.auth.jwt()).map((response: Response) => response.json());
  }

  delete(id: number) {
    return this.http.delete(this.api.baseUrl + '/user/' + id, this.auth.jwt()).map((response: Response) => response.json());
  }

  getFollowers(id: number) {
    return this.http.get(this.api.baseUrl + '/user/' + id + '/followers', this.auth.jwt()).map((response: Response) => response.json());
  }

  getFollowing(id: number) {
    return this.http.get(this.api.baseUrl + '/user/' + id + '/following', this.auth.jwt()).map((response: Response) => response.json());
  }
}
