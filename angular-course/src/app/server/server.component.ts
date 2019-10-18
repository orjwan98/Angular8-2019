import { Component } from '@angular/core';

@Component({
  selector: '.app-server',
  templateUrl: './server.component.html'
})

export class ServerComponent {
  serverID = 1;
  serverStatus = 'offline';

  serverStatusFun() {
    return this.serverStatus;
  }
}
