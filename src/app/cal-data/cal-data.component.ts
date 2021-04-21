import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cal-data',
  templateUrl: './cal-data.component.html',
  styleUrls: ['./cal-data.component.css']
})
export class CalDataComponent implements OnInit {
  total: any = 99.00;
  NearTotal: any = 100.00;
  NextNear: any = 110.00;
  LastTotal: any = 120.00;

  constructor() { }

  ngOnInit() {
  }

  onTotal() {
    this.total = "99.00";
  }
}