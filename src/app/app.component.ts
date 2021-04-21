import { Component, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
  title = 'POS GUI';
  className: any;
  items: MenuItem[];

  someMethod() {
    // this.trigger.openMenu();
  }

  ngOnInit() {
    // this.items = 
  }
}
