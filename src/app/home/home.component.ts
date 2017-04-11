import { Component, OnInit } from '@angular/core';
import {UserService} from "../_services/user/user.service";
import {KweetService} from "../_services/kweet/kweet.service";
import {Kweet} from "../models/kweet";

@Component({
  selector: '',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: any = {};
  timeline: any = {};
  kweetMessage: string;

  constructor(private userService: UserService,
              private kweetService: KweetService) { }

  ngOnInit() {
    this.loadUser();
    this.loadTimeLine();
  }

  loadUser() {
    this.user = JSON.parse(localStorage.getItem('currentUser'));
  }

  loadTimeLine() {

  }

  postKweet() {
    if (this.user && this.user.username && this.kweetMessage) {
      let kweet = new Kweet(this.user.username, this.kweetMessage);

      this.kweetService.postKweet(kweet).subscribe(
        data => {
          console.log("Succesfully posted new kweet.");
          this.loadTimeLine();
        },
        error => {
          console.log('Failed to post kweet.');
        }
      );
    }
  }

}
