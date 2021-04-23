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
  doubleCost1: number[];
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
  Description: any = "";
  ItemSno: number = 1;
  AllItem: any = [];
  Total: any = 0;
  NearTotal: number = 0;
  NextNear: number = 0;
  LastTotal: number = 0;
  Paid: any = 0.00;
  ChangeAmount: any = 0.00;
  EnableChangeAmount: boolean = false;

  name: any;

  @ViewChild("scrollDiv") scrollDiv: ElementRef;
  disableAccept: boolean = false;
  keys: string[];
  _utilService: any;

  constructor(private tableconstant: TableConstants, private restAPI: RestAPIService, private PathConstants: PathConstants, private messageService: MessageService) { }

  ngOnInit() {
    this.onMenuGet();
    this.onSideMenu();
    this.onItem();
    this.MenuColor = ['green', '#58FA58', '#9A2EFE', '#FF8000', '#FF0040', '#81DAF5', 'green', '#58FA58', '#9A2EFE', '#FF8000',
      '#2E2E2E', '#81DAF5', 'green', '#58FA58', '#9A2EFE', '#3B0B17', '#2E2E2E', '#81DAF5', 'green', '#58FA58', '#FE2EC8', '#3B0B17',
      '#2E2E2E', '#81DAF5'];
    this.doubleCost1 = [5.00, 10.00, 15.00, 20.00, 25.00];
    this.doubleCost2 = [30.00, 35.00, 40.00, 45.00, 50.00];
    this.singleCost1 = [1, 2, 3, 4, 5];
    this.singleCost2 = [6, 7, 8, 9, 0];
    this.ItemColumn = this.tableconstant.ItemDescriptionColumn;
  }

  onScroll(event: any) {
    // visible height + pixel scrolled >= total height 
    if (event.target.offsetHeight + event.target.scrollTop >= event.target.scrollHeight) {
      this.disableAccept = false;
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

  onItem() {
    this.restAPI.get(PathConstants.ITEM).subscribe(res => {
      if (res !== undefined && res !== null) {
        this.AllItem = res.value;
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

  onDescription() {
    let tempItemNo = this.Description;
    this.Description = "";
    let Amount = 0.00;
    let temp;
    this.AllItem.forEach(des => {
      if (tempItemNo === des.Item_No) {
        temp = 1;
        Amount = des.Price - 0.00 * des.Price;
        this.ItemData.push({ 'Sno': this.ItemSno++, 'ItemNo': des.ItemNo, 'Description': des.Description, 'Quantity': 1, 'Price': des.Price, 'Discount': 0.00, 'Amount': Amount, 'Scale': des.Scale });
        var totCost = this.Total + des.Price;
        // var totval = totCost.toFixed(2);
        this.Total = totCost;
        this.NearTotal = Math.round(this.Total);
        this.NextNear = 20;
        this.LastTotal = 50;
      }
    });
    // if (temp = 1) {
    //   this.messageService.clear();
    //   this.messageService.add({ key: 't-err', severity: StatusMessage.SEVERITY_WARNING, summary: "Barcode: " + tempItemNo, detail: "Item Not Found" });
    // }
  }

  onClear() {
  }

  onMenuGet() {
    this.restAPI.get(PathConstants.MAIN_MENU).subscribe(res => {
      if (res !== undefined && res !== null) {
        this.MainMenu = res.value;
        // this.menuTempTitle = res.value;
        let j = 0;
        this.MainMenu.forEach(res => {
          this.menuTitle.push({ 'ID': res.Key_Value, 'Description': res.Description, 'Color': this.MenuColor[j], 'Key_Command': res.Key_Command, 'Key_Value': res.Key_Value, 'Menu_ID': res.Menu_ID });
          // this.menuTitle.push({ 'ID': res.Description.toUpperCase(), 'Color': res.Colour, 'Key_Command': res.Key_Command, 'Menu_ID': res.Menu_ID });
          // this.menuTitle.push({ 'ID': res.Description.toUpperCase(), 'Color': this.MenuColor[j], 'Key_Command': res.Key_Command,  });
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

  onSideMenuGet(d) {
    this.menuTempTitle = [];
    this.menuSub = null;
    if (this.sideMenu !== undefined && this.sideMenu !== null) {
      let j = 0;
      this.sideMenu.forEach(result => {
        if (d.Key_Command === "0") {
          this.enableCost = true;
          this.CostLabel = d.Description;
          this.menuSub = d;
        } else if (d.ID === result.Menu_ID) {
          if (result.Description !== '' && result.Description !== null && result.Description !== undefined && result.Description !== 'BACK') {
            this.menuTempTitle.push({ 'Menu_ID': result.Menu_ID, 'Description': result.Description, 'Color': this.MenuColor[j], 'Key_Value': result.Key_Value });
            // this.menuTempTitle.push({ 'ID': result.Description.toUpperCase(), 'Color': this.MenuColor[j], 'Key_Value': result.Key_Value });
            j += 1;
          }
          this.enableMain = false;
          this.enableSide = true;
        }
      });
    }
  }

  onSubMenuItem(d) {
    let Amount = 0.00;
    this.AllItem.forEach(res => {
      if (res.Item_No === d.Key_Value) {
        Amount = res.Price - 0.00 * res.Price;
        this.ItemData.push({ 'Sno': this.ItemSno++, 'ItemNo': res.ItemNo, 'Description': res.Description, 'Quantity': 1, 'Price': res.Price, 'Discount': '0.00', 'Amount': Amount, 'Scale': res.Scale });
        var totCost = this.Total + res.Price;
        // var totval = totCost.toFixed(2);
        this.Total = totCost;
        this.NearTotal = Math.round(this.Total);
        this.NextNear = 20;
        this.LastTotal = 50;
      }
    });
  }

  onCalDesc($event) {
    let tempdesc = $event.target.value;
    this.Description = this.Description + tempdesc;
  }

  onBack() {
    this.enableMain = true;
    this.enableSide = false;
  }

  onCost(d) {
    let Amount = 0.00;
    this.Cost = null;
    if (d === 5.00 || d === 10.00 || d === 15.00 || d === 20.00 || d === 25.00 || d === 30.00 || d === 35.00 || d === 40.00 || d === 45.00 || d === 50.00) {
      this.Cost = d;
      var totCost = this.Total + this.Cost;
      this.Total = totCost;
      this.NearTotal = Math.round(this.Total);
      this.NextNear = 20;
      this.LastTotal = 50;
      this.ItemData.push({ 'Sno': this.ItemSno++, 'Description': this.menuSub.Description, 'Quantity': 1, 'Price': this.Cost, 'Discount': '0.00', 'Amount': this.Cost })
      this.enableCost = false;
    } else if (d === 1 || d === 2 || d === 3 || d === 4 || d === 5 || d === 6 || d === 7 || d === 8 || d === 9) {
      this.Cost = d;
    }
  }

  onExactAmount() {
    let exactAmount = this.Total;
    this.Paid = exactAmount;
    this.messageService.clear();
    this.messageService.add({ key: 't-err', severity: StatusMessage.SEVERITY_SUCCESS, summary: StatusMessage.SUMMARY_SUCCESS, detail: "Posted Tranaction" });
  }

  onNearAmount() {
    let nearTotal;
    this.Paid = this.NearTotal;
    nearTotal = nearTotal - this.Total;
    this.ChangeAmount = nearTotal;
    // this.ChangeAmount = this.ChangeAmount.toFixed(2);
    this.EnableChangeAmount = true;
    this.messageService.clear();
    this.messageService.add({ key: 't-err', severity: StatusMessage.SEVERITY_SUCCESS, summary: StatusMessage.SUMMARY_SUCCESS, detail: "Posted Tranaction" });
  }

  onClose() {
    this.messageService.clear('t-err');
  }
}
