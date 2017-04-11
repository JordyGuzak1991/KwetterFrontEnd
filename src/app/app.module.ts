import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import {RouterModule} from "@angular/router";
import {rootRouterConfig} from "./app.routes";
import {AuthService} from "./_services/auth/auth.service";
import {AlertService} from "./_services/alert/alert.service";
import {ApiService} from "./_services/api/api.service";
import {UserService} from "./_services/user/user.service";
import {AuthGuard} from "./_guards/auth.guard";
import { AlertComponent } from './alert/alert.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {KweetService} from "app/_services/kweet/kweet.service";

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    HomeComponent,
    AlertComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: true }),
    AlertModule.forRoot()
  ],
  providers: [
    AuthGuard,
    ApiService,
    AuthService,
    AlertService,
    UserService,
    KweetService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
