import { Component, OnInit } from '@angular/core';
import {UserService} from "../_services/user/user.service";
import {AlertService} from "../_services/alert/alert.service";
import {Kweet} from "app/models/kweet";
import {User} from "app/models/user";
import {KweetService} from "app/_services/kweet/kweet.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  username: string;
  user: any = {};
  kweets: Kweet[] = [];
  followers: User[] = [];
  following: User[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private alertService: AlertService,
    private kweetService: KweetService) { }

  ngOnInit() {
    this.route
      .queryParams
      .subscribe(params => {
        this.username = params['user'] || null;

        if (this.username) {
          this.loadUser();
        } else {
          this.router.navigate(['/']);
        }

      });
  }

  loadUser() {
    this.userService.getByName(this.username).subscribe(
      data => {
        this.user = data;
        this.loadKweets();
        this.loadFollowers();
      },
      error => {
        this.alertService.error(error);
      }
    );
  }

  loadKweets() {
    this.kweetService.getRecent(this.user.username).subscribe(
      data => {
        this.kweets = data;
      }, error => {
        this.alertService.error(error);
      }
    );
  }

  loadFollowers() {
    this.userService.getFollowers(this.user.id).subscribe(
      data => {
        this.followers = data;
      }, error => {
        this.alertService.error(error);
      }
    );
  }

  loadFollowing() {
    this.userService.getFollowing(this.user.id).subscribe(
      data => {
        this.following = data;
      }, error => {
        this.alertService.error(error);
      }
    );
  }
}
