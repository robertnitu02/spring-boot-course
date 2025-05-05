import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../../services/token/token.service';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-navigation-bar',
  imports: [
    NgIf
  ],
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.scss'
})
export class NavigationBarComponent {

  isLogged = false;

  constructor(
    private route: Router,
    private tokenService: TokenService,
  ) {
    console.log(tokenService.token);
    this.isLogged = tokenService.token !== null;
  }

  goToLogin() {
    this.route.navigate(['login']);
  }

}
