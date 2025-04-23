import { Component } from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'auth-project';

  constructor(
    private route: Router
  ) {
  }

  goToLogin() {
    this.route.navigate(['login']);
  }
}
