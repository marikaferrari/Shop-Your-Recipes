import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  loadedFeature = 'recipe'; // A property to keep track of the currently selected feature (default is 'recipe')

  // Method to change the value of loadedFeature based on the user's navigation choice
  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
