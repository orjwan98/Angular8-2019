import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-servers]',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  addServers = false;
  addedSmthYet = "Nope, not yet!"

  constructor() {
    setTimeout(() => {
      this.addServers = true;
    }, 1000);
  }

  addServersStatus() {
    return this.addServers;
  }

  ngOnInit() {
  }

  changeStuff() {
    this.addedSmthYet = "Yup, we just did!"
  }
}
