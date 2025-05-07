import {Component, OnDestroy, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../../services/token/token.service';
import { NgIf } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navigation-bar',
  imports: [
    NgIf
  ],
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.scss'
})
export class NavigationBarComponent implements OnInit, OnDestroy {

  isLogged = false;
  loginSub: Subscription | undefined;

  constructor(
    private route: Router,
    private tokenService: TokenService,
  ) {
  }

  ngOnInit(): void {
    this.loginSub = this.tokenService.watchLoggedStatus()
      .subscribe(loggedStatus => {
        console.log(this.tokenService.token);
        this.isLogged = loggedStatus !== null;
      });
  }

  ngOnDestroy(): void {
    if (this.loginSub === undefined) return;

    this.loginSub.unsubscribe();
  }

  goToLogin() {
    this.route.navigate(['login']);
  }

  gotoHome() {
    this.route.navigate(['home']);
  }

  goToProfile() {
    this.route.navigate(['profile']);
  }

}
