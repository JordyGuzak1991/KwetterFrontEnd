import { Component, OnInit } from '@angular/core';
import {UserService} from "../_services/user/user.service";
import {AlertService} from "../_services/alert/alert.service";
import {Router} from "@angular/router";
import {User} from "app/models/user";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  user: any = {};
  loading = false;

  constructor(
    private router: Router,
    private userService: UserService,
    private alertService: AlertService) {
    this.user.username = 'test';
  }

  register() {
    this.loading = true;
    this.userService.create(this.user)
      .subscribe(
        data => {
          this.alertService.success('Registration successful', true);
          this.router.navigate(['/login']);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
  }

}
