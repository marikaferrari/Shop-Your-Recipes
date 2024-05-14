import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {

  // We are retrieving the recipe data 
  loadedFeature = 'recipe'

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
