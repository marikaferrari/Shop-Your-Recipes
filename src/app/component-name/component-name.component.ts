import { Component } from '@angular/core';

@Component({
  selector: 'app-component-name',
  templateUrl: './component-name.component.html',
  styleUrl: './component-name.component.css'
})
export class ComponentNameComponent {
  serverId: number = 10;
  serverStatus: string = 'offline';

  // This is how you define a method in TypeScript
  getServerStatus() {
    return this.serverStatus;
  }
}
