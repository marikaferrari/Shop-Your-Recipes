import { Component } from '@angular/core';
import NoSleep from 'nosleep.js';

@Component({
  selector: 'app-keep-awake',
  templateUrl: './keep-awake.component.html',
  styleUrls: ['./keep-awake.component.css']
})
export class KeepAwakeComponent {
  noSleep = new NoSleep();
  isAwake = false;

  toggleKeepAwake() {
    if (this.isAwake) {
      this.noSleep.disable();
    } else {
      this.noSleep.enable();
    }
    this.isAwake = !this.isAwake;
  }
}
