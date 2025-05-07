import { Component } from '@angular/core';
import { TokenService } from '../../services/token/token.service';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-profile',
  imports: [
    NgIf
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

  constructor(
    public tokenService: TokenService
  ) {
  }

  logOut() {
    this.tokenService.reset();
    console.log('Logout');
  }
}
