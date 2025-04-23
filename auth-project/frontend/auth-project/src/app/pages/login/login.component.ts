import { Component } from '@angular/core';
import { AuthenticationRequest } from '../../services/models/authentication-request';
import { NgForOf, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/services/authentication.service';
import { AuthenticationResponse } from '../../services/models/authentication-response';
import { TokenService } from '../../services/token/token.service';

@Component({
  selector: 'app-login',
  imports: [
    NgIf,
    NgForOf,
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  authRequest: AuthenticationRequest = { email: '', password: '' };
  errorMessages: Array<string> = [];

  constructor(
    private router: Router,
    private authService: AuthenticationService,
    private tokenService: TokenService,
  ) {
  }

  login() {
    this.errorMessages = [];
    this.authService.authenticate({
      body: this.authRequest
    }).subscribe({
      next: (res: AuthenticationResponse) => {
        this.tokenService.token = res.token as string;
        // route
        console.log(res);
      },
      error: (err) => {
        console.log(JSON.stringify(err));
        if (err.error.validationErrors) {
          this.errorMessages = err.error.validationErrors;
        } else {
          this.errorMessages.push(err.error.error);
        }
      }
    });
  }

  register() {
    this.router.navigate(['register']);
  }
}
