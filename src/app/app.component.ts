import { Component, OnInit } from '@angular/core';
import { AuthService } from './core/auth/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit() {
    // this.authService.autoLogin();
  }
}
