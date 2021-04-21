import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { StatusMessage } from '../Const/Messages';
import { PathConstants } from '../const/PathConstants';
import { RestAPIService } from '../shared-services/restAPI.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  value: any;
  MainMenu: any = [];
  TopMenu: any = [];
  menuTitle: any = [];
  menuTempTitle: any = [];
  sideMenu: any = [];
  MenuColor: any = [];
  ColorCode: any;
  menu: any;
  Price: any;
  Cost: any;
  CostLabel: any;
  menuSub: any;
  singleCost1: any = [];
  doubleCost1: any = [];
  singleCost2: any = [];
  doubleCost2: any = [];
  MainMenuBlock: boolean;
  enableMain: boolean = true;
  enableSide: boolean = false;
  enableCost: boolean = false;
  DescriptionData: string;
  ItemData: any = [];
  ItemColumn: any;
  loading: boolean;
  Description: any;

  constructor(private restAPI: RestAPIService, private PathConstants: PathConstants, private messageService: MessageService) { }

  ngOnInit() {
    this.onMenuGet();
    this.onSideMenu();
    this.MenuColor = ['green', '#58FA58', '#9A2EFE', '#FF8000', '#FF0040', '#81DAF5', 'green', '#58FA58', '#9A2EFE', '#FF8000',
      '#2E2E2E', '#81DAF5', 'green', '#58FA58', '#9A2EFE', '#3B0B17', '#2E2E2E', '#81DAF5', 'green', '#58FA58', '#FE2EC8', '#3B0B17',
      '#2E2E2E', '#81DAF5'];
    this.doubleCost1 = [5, 10, 15, 20, 25];
    this.doubleCost2 = [30, 35, 40, 45, 50];
    this.singleCost1 = [1, 2, 3, 4, 5];
    this.singleCost2 = [6, 7, 8, 9, 0];
  }

  onMenuGet() {
    this.restAPI.get(PathConstants.MAIN_MENU).subscribe(res => {
      if (res !== undefined && res !== null) {
        this.MainMenu = res.value;
        // this.menuTempTitle = res.value;
        let j = 0;
        this.MainMenu.forEach(res => {
          this.menuTitle.push({ 'ID': res.Description.toUpperCase(), 'Color': this.MenuColor[j] });
          j += 1;
        });
        // this.sideMenu = this.menuTitle;
      } else {
        this.messageService.clear();
        this.messageService.add({ key: 't-err', severity: StatusMessage.SEVERITY_WARNING, summary: StatusMessage.SUMMARY_WARNING, detail: res.message });
      }
    }, (err: HttpErrorResponse) => {
      if (err.status === 0 || err.status === 400) {
        this.messageService.clear();
        this.messageService.add({ key: 't-err', severity: StatusMessage.SEVERITY_ERROR, summary: StatusMessage.SUMMARY_ERROR, detail: StatusMessage.ErrorMessage });
      }
    });
  }

  onSideMenu() {
    this.restAPI.get(PathConstants.SUB_MENU).subscribe(res => {
      if (res !== undefined && res !== null) {
        this.sideMenu = res.value;
      }
    });
  }

  onSideMenuGet(d) {
    this.menuTempTitle = [];
    this.menuSub = null;
    if (this.sideMenu !== undefined && this.sideMenu !== null) {
      let j = 0;
      this.sideMenu.forEach(result => {
        if (d.ID === 'GROCERY') {
          this.enableCost = true;
          this.CostLabel = "GROCERY";
          this.menuSub = d;
        } else if (d.ID === 'PANNEER BLOCK') {
          this.enableCost = true;
          this.menuSub = d;
          this.CostLabel = "PANNEER BLOCK";
        } else if (d.ID === 'MEAT') {
          this.enableCost = true;
          this.menuSub = d;
          this.CostLabel = "MEAT";
        } else if (d.ID === 'FRUIT') {
          this.enableCost = true;
          this.menuSub = d;
          this.CostLabel = "FRESH FRUIT";
        } else if (d.ID === 'CHILL FOOD') {
          this.enableCost = true;
          this.menuSub = d;
          this.CostLabel = "CHILL FOOD";
        } if (d.ID === 'VEG 2') {
          this.menuTempTitle.push({ 'ID': result.Description.toUpperCase(), 'Color': this.MenuColor[j] });
        } else if (result.Menu_ID === d.ID) {
          if (result.Description !== '' && result.Description !== null && result.Description !== undefined && result.Description !== 'BACK') {
            this.menuTempTitle.push({ 'ID': result.Description.toUpperCase(), 'Color': this.MenuColor[j] });
            j += 1;
          }
          this.enableMain = false;
          this.enableSide = true;
        }
      });
    }
  }

  onBack() {
    this.enableMain = true;
    this.enableSide = false;
  }

  onCost(d) {
    if (d === 5 || d === 10 || d === 15 || d === 20 || d === 25 || d === 30 || d === 35 || d === 40 || d === 45 || d === 50) {
      this.Cost = d + '.00';
      // this.DescriptionData.push({ 'Description': this.menuSub.ID, 'Quantity': 1, 'Price': this.Cost, 'Discount': '0.00', 'Amount': this.Cost })
      this.enableCost = false;
    }
  }
}
