import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import { Router } from '@angular/router';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-home-page',
  imports: [
    NgOptimizedImage,
    TranslatePipe
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

  constructor(private route: Router) {
  }

  goToRegister() {
    this.route.navigate(['register']);
  }
}
