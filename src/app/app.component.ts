import { Component, OnInit } from '@angular/core';
import { AuthService } from './core/auth/auth.service';

import { RouterModule } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [RouterModule, MainLayoutComponent],
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit() {
    // this.authService.autoLogin();
  }
}
