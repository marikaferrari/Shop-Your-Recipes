import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  // *ngFor assignment
  showSecret = false;
  log = [];

  // Each time the button is clicked
  // This method is triggered and displays how many times it's been clicked
  onToggleDetails() {
    this.showSecret = !this.showSecret;
    this.log.push(this.log.length + 1)
  }

}
