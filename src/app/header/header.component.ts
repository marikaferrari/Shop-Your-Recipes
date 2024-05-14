import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  // For responsive header on smaller screen (hamburger menu)
  collapsed = true;

  @Output() featureSelected = new EventEmitter<string>();

  // Method to render the correct component
  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }
}
