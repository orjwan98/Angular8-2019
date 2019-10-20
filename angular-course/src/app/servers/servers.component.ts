import { Component, OnInit } from '@angular/core';
import { ChildActivationStart } from '@angular/router';

@Component({
  selector: '[app-servers]',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  addServers = false;
  addedServerYet = 'Nope, not yet!';
  createServerName = '';

  constructor() {
    setTimeout(() => {
      this.addServers = true;
    }, 1000);
  }

  ngOnInit() {
  }

  addServersStatus() {
    return this.addServers;
  }

  onAddServer() {
    this.addedServerYet = 'Yup, we just did! and it is called ' + this.createServerName;
  }

  createServer(event: Event) {
    this.createServerName = (event.target as HTMLInputElement).value;
  }
}
