import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-servers]',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  addServers = false;

  constructor() {
    setTimeout(() => {
      this.addServers = true;
    }, 1000);
  }

  ngOnInit() {
  }
}
