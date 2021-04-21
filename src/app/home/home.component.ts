import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, Input, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MessageService } from 'primeng/api';
import { StatusMessage } from '../Const/Messages';
import { PathConstants } from '../const/PathConstants';
import { TableConstants } from '../Const/TableConstants';
import { RestAPIService } from '../shared-services/restAPI.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
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
  DescriptionData: any = [];
  ItemData: any = [];
  ItemColumn: any;
  loading: boolean;
  Description: any;
  ItemSno: number = 1;

  @ViewChild("scrollDiv") scrollDiv: ElementRef;
  disableAccept: boolean = false;
  keys: string[];
  _utilService: any;

  constructor(private tableconstant: TableConstants, private restAPI: RestAPIService, private PathConstants: PathConstants, private messageService: MessageService) { }

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
    this.ItemColumn = this.tableconstant.ItemDescriptionColumn;
  }

  onScroll(event: any) {
    // visible height + pixel scrolled >= total height 
    if (event.target.offsetHeight + event.target.scrollTop >= event.target.scrollHeight) {
      this.disableAccept = false;
      console.log("End");
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnChanges", changes);
    for (const propName in changes) {
      let change = changes[propName];
      if (propName == 'coi') {
        // console.log('CHANGED...DO HERE');
        console.log(this.scrollDiv.nativeElement.offsetHeight);
        console.log(this.scrollDiv.nativeElement.scrollHeight);
      }

    }

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
            // this.ItemData.push({ 'Sno': this.ItemSno++, 'Description': this.Description})
            j += 1;
          }
          this.enableMain = false;
          this.enableSide = true;
        // } else
        //   if (result.Menu_ID === d.ID && this.menuTempTitle !== undefined && this.enableSide === true) {
        //     this.ItemData.push({ 'Sno': this.ItemSno++, 'Description': result.Description })
          }
      });
    }
  }

  onBack() {
    this.enableMain = true;
    this.enableSide = false;
  }

  onCost(d) {
    this.Cost = null;
    if (d === 5 || d === 10 || d === 15 || d === 20 || d === 25 || d === 30 || d === 35 || d === 40 || d === 45 || d === 50) {
      this.Cost = d + '.00';
      this.ItemData.push({ 'Sno': this.ItemSno++, 'Description': this.menuSub.ID, 'Quantity': 1, 'Price': this.Cost, 'Discount': '0.00', 'Amount': this.Cost })
      this.enableCost = false;
    } else if (d === 1 || d === 2 || d === 3 || d === 4 || d === 5 || d === 6 || d === 7 || d === 8 || d === 9) {
      this.Cost = d;
    }
  }
}
