import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthApiService } from './services/auth-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = 'Akouma';

  constructor(public authService: AuthApiService, private router: Router) { }

  logout() {
    if (confirm("Logout?")) {
      this.authService.logout();
      this.router.navigate(['/home']);
    }
  }


}
