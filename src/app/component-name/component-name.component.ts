import { Component } from '@angular/core';

@Component({
  selector: 'app-component-name',
  templateUrl: './component-name.component.html',
  styleUrl: './component-name.component.css'
})
export class ComponentNameComponent {
  serverId: number = 10;
  serverStatus: string = 'offline';
  serverName = "";

  // This is how you define a method in TypeScript
  getServerStatus() {
    return this.serverStatus;
  }

  allowNewServer = false;

  serverCreationStatus = 'No server was created';

  constructor() {
    setTimeout(() => {this.allowNewServer = true;}, 2000);
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created';
  }

  onUpdateServerName(event: any) {
    this.serverName = event.target.value;
  }
}
