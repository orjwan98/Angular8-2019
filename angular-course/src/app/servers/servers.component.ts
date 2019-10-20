import { Component, OnInit } from '@angular/core';
import { ChildActivationStart } from '@angular/router';

@Component({
  selector: '[app-servers]',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  addServersEnabled = false;
  addedServerYet = 'Nope, not yet!';
  createServerName = '';
  createdServer = false;

  constructor() {
    setTimeout(() => {
      this.addServersEnabled = true;
    }, 1000);
  }

  ngOnInit() {
  }

  addServersStatus() {
    return this.addServersEnabled;
  }

  onAddServer() {
    this.createdServer = true;
    this.addedServerYet = 'Yup, we just did! and it is called ' + this.createServerName;
  }

  createServer(event: Event) {
    this.createServerName = (event.target as HTMLInputElement).value;
  }
}
