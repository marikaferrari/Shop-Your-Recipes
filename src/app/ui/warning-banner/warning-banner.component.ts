import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-warning-banner',
  templateUrl: './warning-banner.component.html',
  styleUrls: ['./warning-banner.component.css'],
  standalone: true,
  imports: [MatIconModule],
})
export class WarningBannerComponent {}
