import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  imports: [
    NgOptimizedImage
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
