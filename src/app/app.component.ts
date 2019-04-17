import {Component} from '@angular/core';

/** @title Sidenav open & close behavior */
@Component({
  selector: 'app-component',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class Index {
  events: string[] = [];
  opened: boolean;

}
