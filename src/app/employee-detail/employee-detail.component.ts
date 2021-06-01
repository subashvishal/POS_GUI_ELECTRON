import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  enablePetty: boolean = false;
  enablePettyHead: boolean = false;
  enablePetCash: boolean = false;
  enableFunction: boolean = false;
  Cashbooze: any = [];
  functionButtons: any = [];
  ButtonColor: any = [];

  password: any;


  Incoming: any = [];
  Uploading: any = [];
  enableoutput: boolean = false;


  // products: Product[];

    sortOptions: SelectItem[];

    sortOrder: number;

    sortField: string;

  constructor(private Product: HomeComponent) { }

  ngOnInit() {
    this.functionButtons = ['LOG OUT', 'TRANS LIST', 'PETTY CASH', 'SUSPENDED', 'PRICE CHECK', 'PRINT LAST'];
    // this.functionButtons = ['LOG OUT','TRANS LIST','PETTY CASH','SUSPENDED','CUSTOMER','BO TRANS LIST','PRICE CHECK','REPORTS','PRINT LAST','SALES','EXTRAS'];

    this.ButtonColor = ['green', '#58FA58', '#9A2EFE', '#FF8000', '#FF0040', '#81DAF5', 'green', '#58FA58', '#9A2EFE', '#FF8000',
      '#2E2E2E', '#81DAF5', 'green', '#58FA58', '#9A2EFE', '#3B0B17', '#2E2E2E', '#81DAF5', 'green', '#58FA58', '#FF0040', '#3B0B17',
      '#2E2E2E', '#81DAF5'];

      this.sortOptions = [
        {label: 'Price High to Low', value: '!price'},
        {label: 'Price Low to High', value: 'price'}
    ];
  }

  onSortChange(event) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
        this.sortOrder = -1;
        this.sortField = value.substring(1, value.length);
    }
    else {
        this.sortOrder = 1;
        this.sortField = value;
    }
}

  onfuncButt(func) {
    // this.functionButtons = ['LOG OUT', 'TRANS LIST', 'PETTY CASH', 'SUSPENDED', 'PRICE CHECK', 'PRINT LAST'];
    // // this.functionButtons = ['LOG OUT','TRANS LIST','PETTY CASH','SUSPENDED','CUSTOMER','BO TRANS LIST','PRICE CHECK','REPORTS','PRINT LAST','SALES','EXTRAS'];
    // this.ButtonColor = ['green', '#58FA58', '#9A2EFE', '#FF8000', '#FF0040', '#81DAF5', 'green', '#58FA58', '#9A2EFE', '#FF8000',
    //   '#2E2E2E', '#81DAF5', 'green', '#58FA58', '#9A2EFE', '#3B0B17', '#2E2E2E', '#81DAF5', 'green', '#58FA58', '#FF0040', '#3B0B17',
    //   '#2E2E2E', '#81DAF5'];
    // this.functionButtons = [];
    // this.menuSub = null;
    if (this.functionButtons === undefined && this.functionButtons === null) {
      let f = 0;
      this.functionButtons.forEach(result => {
        this.functionButtons.push({ Description: result[f], Color: this.ButtonColor[f] });
        // this.functionButtons = ['LOG OUT', Color: '#9A2EFE','TRANS LIST', Color: '#9A2EFE','PETTY CASH', Color: '#9A2EFE','SUSPENDED', Color: '#9A2EFE','CUSTOMER', Color: '#9A2EFE','BO TRANS LIST', Color: '#9A2EFE','PRICE CHECK', Color: '#9A2EFE','REPORTS', Color: '#9A2EFE','PRINT LAST', Color: '#9A2EFE','SALES', Color: '#9A2EFE','EXTRAS'];

        this.enableFunction = true;
        // this.menuSub = func;
      });
    }
  }




  onCode() {

    // this.Incoming.push({ 0: "Supportive parents", 1: "Being able to solve a hard problem", 3: "Good food", 4: "Fun game with friends", 5: "Good food", 6: "Being healthy" });


    // this.Incoming.push("Supportive parents");
    // this.Incoming.push("Being able to solve a hard problem");
    // this.Incoming.push("Good food");
    // this.Incoming.push("Fun game with friends");
    // this.Incoming.push("Good food");
    // this.Incoming.push("Being healthy");

    this.enableoutput = true;

    let FirstInput: number = 2;

    if (FirstInput = 2) {
      this.Incoming.push("Good food");
      this.Incoming.push("Being able to solve a hard problem");
      this.Incoming.push("Supportive parents");
      this.Incoming.push("Fun game with friends");
      this.Incoming.push("Good food");
      this.Incoming.push("Being healthy");
      let sortt = [];
      sortt = this.Incoming;

      console.log(this.Incoming);

      let s = 0;
      // let m = 1;
      this.Incoming.forEach(result => {
        var len = this.Incoming.length;
        // sortt = this.Incoming;

        // if (sortt.length != s) {
        let t = 0;
        let m: number;
        // result.forEach(result => {

        for (m = 1, len == t; m++;) {
          if (sortt[s] == sortt[m]) {
            this.Uploading.push(sortt[s]);
            // this.Uploading.push(result[m]);
            sortt[s] = "";
            sortt[m] = "";
            let c = 1;
            s++
            t++;
          }
        }
        // s++;
        // }
        //   if (result[t] == result[m]) {
        //     this.Uploading.push(result[s]);
        //     // this.Uploading.push(result[m]);
        //     result[s].pop();
        //     result[m].pop();
        //   }
        //   t++;
        //   m++;
        // }

        // m++;

        // else { }
      });
      // s++;
      // if (0)
      //   sortt.push({})
    }
    FirstInput = 1;
  }
}
