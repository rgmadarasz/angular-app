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
  disableClose:boolean;
  closeEvent:boolean;
  w = window.innerWidth;
      constructor(){
        if (this.w > 450) {
        this.disableClose=true;
        this.closeEvent=true;
      } else {
        this.disableClose=false;
        this.closeEvent=false;
      }
      }
}
