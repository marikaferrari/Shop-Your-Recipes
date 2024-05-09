import { Component } from '@angular/core';

@Component({
  selector: 'app-component-name',
  templateUrl: './component-name.component.html',
  styleUrl: './component-name.component.css'
})
export class ComponentNameComponent {
  userId: number = 10;
  serverStatus: string = 'offline';
  serverName = "";
  serverCreated = false;
  username= '';

  // This is how you define a method in TypeScript
  getServerStatus() {
    return this.serverStatus;
  }

  allowNewServer = false;

  serverCreationStatus = '';

  constructor() {
    setTimeout(() => {this.allowNewServer = true;}, 2000);
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  // This is a method
  onCreateServer() {
    this.serverCreationStatus = 'Server was created! Name is ' + this.username ;
    this.serverCreated = true;
  }

  // This is a method
  onUpdateServerName(event: any) {
    this.serverName = event.target.value;
  }

  // This is a method
  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }

}
