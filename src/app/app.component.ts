import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "./_services/auth/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: any = {};
  title = 'Kwetter';
  searchText: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private auth: AuthService) {
  }

  search() {
    if (this.searchText) {
      this.router.navigate(['profile'], {queryParams: {user: this.searchText}});
    }
  }

  isLoggedIn() {
    return (localStorage.getItem('currentUser') != null);
  }

  logIn() {
    this.router.navigate(['login']);
  }

  logout() {
    this.auth.logout();
  }
}
