export class TableConstants {
  Department: any;
  Vat: any;
  Group: any;
  SubGroup: any;
  MenuColumn: any;
  MainMenuColumn: any;
  StoreColumn: any;
  StaffColumn: any;
  R_HEADERColumn: any;
  R_FOOTERColumn: any;
  ItemColumn: any;
  ListItemColumn: any;
  AddedItemColumn: any;
  PromotionColumn: any;
  PromotionLinesColumn: any;
  AuthorizationColumn: any;
  WeekSummaryColumn: any;
  BarCodeMaskColumn: any;
  WeekItemColumn: any;
  PeriodItemSalesColumn: any;
  ProfitDetailsOfItemSalesColumn: any;
  DeadStockColumn: any;
  TransactionsListColumn: any;
  PayoutTransactionSearchListColumn: any;
  ItemTransactionsListColumn: any;
  VoidLinesColumn: any;
  ZReportListColumn: any;
  ZReportStatementsColumn: any;
  PeriodZReportListColumn: any;
  VendorListColumn: any;
  PurhaseOrderListColumn: any;
  PostedPurchaseOrdersListColumn: any;
  PapersColumn: any;
  DeliveryStaffsColumn: any;
  RoundColumn: any;
  CreateRoundColumn: any;
  CreateRoundSearchColumn: any;
  CustomersColumn: any;
  DeliveryColumn: any;
  DeliveryDetailsColumn: any;
  AddedCustomerColumn: any;
  MonthlyPapersColumn: any;
  BudgensItemsColumn: any;
  BudgensPromotionsColumn: any;
  BestOneItemColumn: any;
  BestOneDownloadColumn: any;
  PriceChangesColumn: any;
  BookerPromotionColumn: any;
  MergePriceChangeColumn: any;
  MergePromoItemsColumn: any;
  BookerPromotionLinesColumn: any;
  BookerDepartmentColumn: any;
  DeliveryHeaderColumn: any;
  StockCountListColumn: any;
  BookOutListColumn: any;
  LabelColumn: any;
  PriceChangeColumn: any;
  PriceStockColumn: any;
  AddItemListColumn: any;
  CustomerSettingColumn: any;
  QuickItemDepartmentsColumn: any;
  POSItemsColumn: any;
  VendorPriceChangeColumn: any;
  ItemDescriptionColumn: any;

  //Buttons
  TransColumn: any[];
  TransSubColumn: any = [];

  constructor() {
    this.ItemDescriptionColumn = [
      { field: 'Sno', header: 'Sno' },
      { field: 'Description', header: 'Description' },
      { field: 'Quantity', header: 'Quantity' },
      { field: 'Price', header: 'Price (£)' },
      { field: 'Discount', header: 'Discount (£)' },
      { field: 'Amount', header: 'Amount (£)' },
    ];

    this.MenuColumn = [
      { field: 'SlNo', header: 'SlNo' },
      { field: 'Menu_ID', header: 'ID' },
      { field: 'KEY_ID', header: 'KEY_ID' },
      { field: 'Key_Command', header: 'Key_Command' },
      { field: 'Key_Value', header: 'Key_Value' },
      { field: 'Description', header: 'Description' },
      { field: 'Colour', header: 'Colour' },
      { field: 'ImagePath', header: 'ImagePath' },
      { field: 'RoleID', header: 'RoleID' },
    ];
    this.MainMenuColumn = [
      { field: 'SlNo', header: 'SlNo' },
      { field: 'Menu_ID', header: 'ID' },
      { field: 'Description', header: 'Description' },
      { field: 'Colour', header: 'Colour' },
      // { field: 'NoLines', header: 'No. of Lines' },
      // { field: 'Available', header: 'Available' },
    ];

    this.TransColumn = [
      { field: 'SlNo', header: 'SlNo' },
      // { field: 'Trans_ID', header: 'Trans ID' },
      { field: 'Trans_No', header: 'Trans Slip' },
      { field: 'TransType', header: 'Trans Type' },
      // { field: 'Sales_Type', header: 'Sales Type' },
      { field: 'Sales_Amount', header: 'Sale Amount (£)' },
      { field: 'Staff_ID', header: 'Staff ID' },
      { field: 'Store_ID', header: 'Store ID' },
      { field: 'Till_ID', header: 'Till ID' },
      { field: 'Z_Report_ID', header: 'Z_Report_ID' },
    ];

    this.TransSubColumn = [
      { field: 'SlNo', header: 'SlNo' },
      { field: 'Line_No', header: 'Line No' },
      { field: 'Trans_No', header: 'Trans Slip' },
      { field: 'Number', header: 'Item No' },
      { field: 'Barcode', header: 'Barcode' },
      { field: 'Description', header: 'Description' },
      { field: 'Quantity', header: 'Quantity' },
      { field: 'Trans_Type', header: 'Trans Type' },
      // { field: 'Trans_Date', header: 'Trans_Date' },
      { field: 'Disc_Amount', header: 'Discount Amount' },
      { field: 'Price', header: 'Price' },
      { field: 'Amount', header: 'Sale Amount' },
      { field: 'Net_Amount', header: 'Net Amount' },
      { field: 'Department_ID', header: 'Department ID' },
      { field: 'Scale', header: 'Scale' },
      { field: 'Scanned', header: 'Scanned' },
      { field: 'Staff_ID', header: 'Staff ID' },
      { field: 'Store_ID', header: 'Store ID' },
      { field: 'Till_ID', header: 'Till ID' },
      { field: 'Z_Report_ID', header: 'Z Report ID' },
    ];


    this.StoreColumn = [
      { field: 'ID', header: 'ID' },
      { field: 'Name', header: 'Name' },
      { field: 'Address_1', header: 'Address_1' },
      { field: 'Address_2', header: 'Address_2' },
      { field: 'City', header: 'City' },
      { field: 'Post_Code', header: 'PostCode' },
      { field: 'Telephone', header: 'Telephone' },
      { field: 'VAT_Code', header: 'VAT Registration' },
      { field: 'Vendor', header: 'Vendor' },
    ];
    this.StaffColumn = [
      { field: 'ID', header: 'ID' },
      { field: 'Name', header: 'Name' },
      // { field: 'Address_1', header: 'Address_1' },
      // { field: 'Address_2', header: 'Address_2' },
      // { field: 'City', header: 'City' },
      // { field: 'Post_Code', header: 'PostCode' },
      { field: 'Telephone', header: 'Telephone' },
      { field: 'Role', header: 'Role' },
    ];
    this.R_HEADERColumn = [
      { field: 'RoleID', header: 'SlNo' },
      { field: 'Line_1', header: 'Line_1' },
      { field: 'Line_2', header: 'Line_2' },
      { field: 'Line_3', header: 'Line_3' },
      { field: 'Line_4', header: 'Line_4' },
      { field: 'Line_5', header: 'Line_5' },
    ];
    this.R_FOOTERColumn = [
      { field: 'RoleID', header: 'SlNo' },
      { field: 'Line_1', header: 'Line_1' },
      { field: 'Line_2', header: 'Line_2' },
      { field: 'Line_3', header: 'Line_3' },
      { field: 'Line_4', header: 'Line_4' },
      { field: 'Line_5', header: 'Line_5' },
    ];

    this.AuthorizationColumn = [
      // { field: 'serialNo', header: 'SlNo' },
      { field: 'Name', header: 'Name' },
      { field: 'RootTag', header: 'RootTag' },
      { field: 'Type', header: 'Type' },
      // { field: 'Admin', header: 'Admin' },
      // { field: 'Manager', header: 'Manager' },
      // { field: 'Cashier', header: 'Cashier' },
      // { field: 'Supervisor', header: 'Supervisor' },
    ];

    this.Vat = [
      { field: 'SlNo', header: 'SlNo' },
      { field: 'ID', header: 'VAT ID' },
      { field: 'Description', header: 'Description' },
      { field: 'Rate', header: 'Rate' },
    ];

    this.Department = [
      { field: 'SlNo', header: 'SlNo' },
      { field: 'ID', header: 'ID' },
      { field: 'Description', header: 'Description' },
      { field: 'Dept_Item', header: 'Dept Item' },
      { field: 'Dept_Group', header: 'Commission' },
      { field: 'AutoLabel', header: 'Auto Label' },
      { field: 'Disc', header: 'Discount' },
      { field: 'Sales_Send', header: 'Nisa Sales' },
      { field: 'Quantity_Entry', header: 'Quantity Entry' },
      { field: 'MercesmeiaPoints', header: 'Mercesmeia Points' },
      { field: 'IsUpdateVendorPrice', header: 'Is Update Vendor Price' },
    ];

    this.Group = [
      { field: 'SlNo', header: 'SlNo' },
      { field: 'ID', header: 'ID' },
      { field: 'Description', header: 'Description' },
    ];

    this.SubGroup = [
      { field: 'SlNo', header: 'SlNo' },
      { field: 'ID', header: 'ID' },
      { field: 'Sub_ID', header: 'Sub_ID' },
      { field: 'Description', header: 'Description' },
    ];

    this.ItemColumn = [
      { field: 'ReOQty', header: 'ReOQty' },
      { field: 'VendorNo', header: 'Vendor No' },
    ];
    this.ListItemColumn = [
      { field: 'SlNo', header: 'SlNo' },
      { field: 'Item_No', header: 'ItemNo' },
      { field: 'Department', header: 'Department' },
      { field: 'Description', header: 'Description' },
      { field: 'PackDesc', header: 'UOM' },
      { field: 'Price', header: 'Price' },
      { field: 'Barcode', header: 'Barcode' },
      { field: 'Inventory', header: 'Stock' },
      { field: 'Cost', header: 'Cost' },
      { field: 'VAT_Code', header: 'Vat' },
      { field: 'Last_Modified', header: 'Last Modified' },
      { field: 'Last_Sales_Date', header: 'Last Sales Date' },
      { field: 'Item_Group', header: 'Group' },
      { field: 'Item_Sub_Group', header: 'SubGroup' },
      { field: 'ReOrderPoint', header: 'ReOrder Point' },
      { field: 'Vendor_No', header: 'Vendor' },
    ];
    this.AddedItemColumn = [
      { field: 'ItemNo', header: 'ItemNo' },
      { field: 'Department', header: 'Department' },
      { field: 'Description', header: 'Description' },
      { field: 'AddQty', header: 'AddQty' },
      { field: 'Stock', header: 'Stock' },
      { field: 'Price', header: 'Price' },
    ];
    this.PromotionColumn = [
      { field: 'ID', header: 'ID' },
      { field: 'Description', header: 'Description' },
      { field: 'Type', header: 'Type' },
      { field: 'Price', header: 'Price' },
      { field: 'StartDate', header: 'StartDate' },
      { field: 'EndDate', header: 'EndDate' },
      { field: 'Blocked', header: 'Blocked' },
      { field: 'SearchText', header: 'SearchText' },
      { field: 'Claim', header: 'Claim' },
    ];
    this.PromotionLinesColumn = [
      { field: 'ProID', header: 'ProID' },
      { field: 'ItemNo', header: 'ItemNo' },
      { field: 'Description', header: 'Description' },
      { field: 'Mandatory', header: 'Mandatory' },
      { field: 'DisPrice', header: 'DisPrice' },
      { field: 'Price', header: 'Price' },
      { field: 'GroupID', header: 'GroupID' },
    ];
    this.WeekSummaryColumn = [
      { field: 'WeekNo', header: 'Week No' },
      { field: '6', header: '6' },
      { field: '7', header: '7' },
      { field: '8', header: '8' },
      { field: '9', header: '9' },
      { field: '10', header: '10' },
      { field: '11', header: '11' },
    ];
    this.BarCodeMaskColumn = [
      { field: 'Mask', header: 'Mask' },
      { field: 'Prefix', header: 'Prefix' },
      { field: 'Length', header: 'Length' },
      { field: 'Item', header: 'Item' },
    ];
    this.WeekItemColumn = [
      { field: 'Department', header: 'Department' },
      { field: 'ItemNo', header: 'Item No' },
      { field: 'ItemName', header: 'Item Name' },
      { field: 'UOM', header: 'UOM' },
      { field: 'Date1', header: '09/03/2021' },
      { field: 'Date2', header: '10/03/2021' },
      { field: 'Date3', header: '11/03/2021' },
      { field: 'Date4', header: '12/03/2021' },
    ];
    this.PeriodItemSalesColumn = [
      { field: 'ItemNo', header: 'Item No' },
      { field: 'Description', header: 'Item Name' },
      { field: 'Department', header: 'Department' },
      { field: 'Group', header: 'Group' },
      { field: 'Qty', header: 'Qty' },
      { field: 'Price', header: 'Price' },
    ];
    this.ProfitDetailsOfItemSalesColumn = [
      { field: 'ItemNo', header: 'Item No' },
      { field: 'Description', header: 'Item Name' },
      { field: 'Department', header: 'Department' },
      { field: 'VatRate', header: 'VatRate' },
      { field: 'Price', header: 'Price' },
      { field: 'Qty', header: 'Qty' },
      { field: 'CostExVat', header: 'Cost Ex Vat' },
      { field: 'SalesIncVat', header: 'Sales Inc Vat' },
      { field: 'Profit', header: 'Profit' },
    ];
    this.DeadStockColumn = [
      { field: 'ItemNo', header: 'Item No' },
      { field: 'Description', header: 'Description' },
      { field: 'Department', header: 'Department' },
      { field: 'Price', header: 'Price' },
      { field: 'Cost', header: 'Cost' },
      { field: 'Margin', header: 'Margin' },
      { field: 'Stock', header: 'Stock' },
    ];
    this.TransactionsListColumn = [
      { field: 'ID', header: 'ID' },
      { field: 'SlipNo', header: 'SlipNo' },
      { field: 'TransDate', header: 'TransDate' },
      { field: 'Staff', header: 'Staff' },
      { field: 'Till', header: 'Till' },
      { field: 'SalesType', header: 'SalesType' },
      { field: 'Amount', header: 'Amount' },
    ];
    this.PayoutTransactionSearchListColumn = [
      { field: 'SlipNo', header: 'SlipNo' },
      { field: 'Date', header: 'Date' },
      { field: 'Staff', header: 'Staff' },
      { field: 'TillID', header: 'Till ID' },
      { field: 'Type', header: 'Type' },
      { field: 'Amount', header: 'Amount' },
      { field: 'PayOut', header: 'PayOut' },
      { field: 'ZReportId', header: 'ZReportId' },
    ];
    this.ItemTransactionsListColumn = [
      { field: 'TransID', header: 'TransID' },
      { field: 'TransDate', header: 'TransDate' },
      { field: 'ItemNo', header: 'Item No' },
      { field: 'Description', header: 'Description' },
      { field: 'Qty', header: 'Qty' },
      { field: 'Price', header: 'Price' },
      { field: 'Sales', header: 'Sales' },
      { field: 'Till', header: 'Till' },
    ];
    this.VoidLinesColumn = [
      { field: 'ItemNo', header: 'Item No' },
      { field: 'Description', header: 'Description' },
      { field: 'Qty', header: 'Qty' },
      { field: 'Price', header: 'Price' },
      { field: 'Amount', header: 'Amount' },
      { field: 'Disc', header: 'Disc' },
      { field: 'NetAmount', header: 'NetAmount' },
      { field: 'VatAmount', header: 'VatAmount' },
    ];
    this.ZReportListColumn = [
      { field: 'ZReportId', header: 'ZReportId' },
      { field: 'StoreID', header: 'StoreID' },
      { field: 'TillID', header: 'TillID' },
      { field: 'ZDate', header: 'ZDate' },
      { field: 'Staff', header: 'Staff' },
      { field: 'Confirmed', header: 'Confirmed' },
      { field: 'ConfirmedBy', header: 'ConfirmedBy' },
      { field: 'ShopSales', header: 'ShopSales' },
      { field: 'Commission', header: 'Commission' },
      { field: 'Cash', header: 'Cash' },
      { field: 'Card', header: 'Card' },
      { field: 'Voucher', header: 'Voucher' },
      { field: 'OtherPO', header: 'OtherPO' },
      { field: 'Difference', header: 'Difference' },
    ];
    this.ZReportStatementsColumn = [
      { field: 'ZReportId', header: 'ZReportId' },
      { field: 'StoreID', header: 'StoreID' },
      { field: 'TillID', header: 'TillID' },
      { field: 'ZDate', header: 'ZDate' },
      { field: 'Staff', header: 'Staff' },
      { field: 'ShopSales', header: 'ShopSales' },
      { field: 'Commission', header: 'Commission' },
      { field: 'Confirmed', header: 'Confirmed' },
      { field: 'ConfirmedBy', header: 'ConfirmedBy' },
    ];
    this.PeriodZReportListColumn = [
      { field: 'ZReportId', header: 'ZReportId' },
      { field: 'StoreID', header: 'StoreID' },
      { field: 'TillID', header: 'TillID' },
      { field: 'ZDate', header: 'ZDate' },
      { field: 'Staff', header: 'Staff' },
      { field: 'ShopSales', header: 'ShopSales' },
      { field: 'Commission', header: 'Commission' },
      { field: 'Cash', header: 'Cash' },
      { field: 'Card', header: 'Card' },
      { field: 'Voucher', header: 'Voucher' },
      { field: 'Uber', header: 'Uber' },
      { field: 'Deliveroo', header: 'Deliveroo' },
    ];
    this.VendorListColumn = [
      { field: 'SlNo', header: 'Sno' },
      { field: 'Vendor_No', header: 'Vendor No' },
      { field: 'Name', header: 'Name' },
      { field: 'Post_Code', header: 'PostCode' },
      { field: 'Phone_No', header: 'Phone' },
      { field: 'POS', header: 'POS' },
      // { field: 'Address_1', header: 'Address 1' },
      // { field: 'Address_2', header: 'Address 2' },
      // { field: 'Address_3', header: 'Address 3' },
      // { field: 'Contact', header: 'Contact' },
      // { field: 'Fax_No', header: 'Fax No' },
      // { field: 'Our_AC_No', header: 'AC No' }
    ];
    this.PurhaseOrderListColumn = [
      { field: 'OrderNo', header: 'OrderNo' },
      { field: 'Description', header: 'Description' },
      { field: 'VendorNo', header: 'VendorNo' },
      { field: 'OrderDate', header: 'OrderDate' },
      { field: 'Scheme', header: 'Scheme' },
      { field: 'VIO', header: 'VIO' },
    ];
    this.PostedPurchaseOrdersListColumn = [
      { field: 'OrderNo', header: 'OrderNo' },
      { field: 'Description', header: 'Description' },
      { field: 'VendorNo', header: 'VendorNo' },
      { field: 'OrderDate', header: 'OrderDate' },
      { field: 'Scheme', header: 'Scheme' },
      { field: 'VIO', header: 'VIO' },
      { field: 'OrderResponse', header: 'OrderResponse' },
      { field: 'DocID', header: 'DocID' },
    ];
    this.PapersColumn = [
      { field: 'ID', header: 'ID' },
      { field: 'ItemNo', header: 'Item No' },
      { field: 'Description', header: 'Description' },
      { field: 'Price', header: 'Price' },
      { field: 'Department', header: 'Department' },
    ];
    this.DeliveryStaffsColumn = [
      { field: 'ID', header: 'ID' },
      { field: 'Name', header: 'Name' },
      { field: 'NO', header: 'NO' },
      { field: 'Address', header: 'Address' },
      { field: 'City', header: 'City' },
      { field: 'PostCode', header: 'Post Code' },
      { field: 'Telephone', header: 'Telephone' },
    ];
    this.CustomerSettingColumn = [
      { field: 'ID', header: 'ID' },
      { field: 'Name', header: 'Name' },
      { field: 'Address', header: 'Address' },
      { field: 'City', header: 'City' },
      { field: 'PostCode', header: 'Post Code' },
      { field: 'Telephone', header: 'Telephone' },
      { field: 'LoyaltyCard', header: 'loyalty Card' },
    ];
    this.RoundColumn = [
      { field: 'RoundID', header: 'RoundID' },
      { field: 'Description', header: 'Description' },
      { field: 'PersonName', header: 'PersonName' },
      { field: 'LastDeliveryDate', header: 'LastDeliveryDate' },
      { field: 'LastBilledDate', header: 'LastBilledDate' },
      { field: 'Round_Type', header: 'Round_Type' },
    ];
    this.CreateRoundColumn = [
      { field: 'ID', header: 'ID' },
      { field: 'Name', header: 'Name' },
      { field: 'Street', header: 'Street' },
      { field: 'PostCode', header: 'Post Code' },
    ];
    this.CreateRoundSearchColumn = [
      { field: 'RoundID', header: 'RoundID' },
      { field: 'Sequence', header: 'Sequence' },
      { field: 'Street', header: 'Street' },
      { field: 'ID', header: 'ID' },
      { field: 'Name', header: 'Name' },
    ];
    this.CustomersColumn = [
      { field: 'ID', header: 'ID' },
      { field: 'Name', header: 'Name' },
      { field: 'Street', header: 'Street' },
      { field: 'PostCode', header: 'Post Code' },
      { field: 'Balance', header: 'Balance' },
      { field: 'LastPaymentDate', header: 'Last Payment Date' },
      { field: 'Blocked', header: 'Blocked' },
      { field: 'BlockDate', header: 'BlockDate' },
      { field: 'Voucher', header: 'Voucher' },
    ];
    this.CreateRoundSearchColumn = [
      { field: 'RoundID', header: 'RoundID' },
      { field: 'Sequence', header: 'Sequence' },
      { field: 'Street', header: 'Street' },
      { field: 'ID', header: 'ID' },
      { field: 'Name', header: 'Name' },
    ];
    this.DeliveryColumn = [
      { field: 'RoundID', header: 'RoundID' },
      { field: 'Description', header: 'Description' },
      { field: 'PersonName', header: 'Person Name' },
      { field: 'LastDeliveryDate', header: 'LastDeliveryDate' },
      { field: 'LastBilledDate', header: 'LastBilledDate' },
      { field: 'Round_Type', header: 'Round_Type' },
      { field: 'Select', header: 'Select' },
    ];
    this.DeliveryDetailsColumn = [
      { field: 'EntryNo', header: 'Entry No' },
      { field: 'PostDate', header: 'Post Date' },
      { field: 'Day', header: 'Day' },
      { field: 'RoundID', header: 'Round ID' },
      { field: 'Cash', header: 'Cash' },
      { field: 'Voucher', header: 'Voucher' },
    ];
    this.AddedCustomerColumn = [
      { field: 'Entry', header: 'Entry' },
      { field: 'CustomerID', header: 'CustomerID' },
      { field: 'Street', header: 'Street' },
      { field: 'DocumentNo', header: 'Document No' },
      { field: 'Amount', header: 'Amount' },
    ];
    this.MonthlyPapersColumn = [
      { field: 'PaperID', header: 'PaperID' },
      { field: 'Description', header: 'Description' },
      { field: 'Received', header: 'Received' },
      { field: 'ReceivedDate', header: 'ReceivedDate' },
      { field: 'DeliveryDate', header: 'DeliveryDate' },
    ];
    this.BudgensItemsColumn = [
      { field: 'VenCode', header: 'VenCode' },
      { field: 'Barcode', header: 'Barcode' },
      { field: 'PackQty', header: 'Pack Qty' },
      { field: 'PackCost', header: 'Pack Cost' },
      { field: 'UnitCost', header: 'Unit Cost' },
      { field: 'RRP', header: 'RRP' },
      { field: 'Margin', header: 'Margin' },
      { field: 'VatCode', header: 'VatCode' },
      { field: 'Description', header: 'Description' },
      { field: 'PackSize', header: 'Pack Size' },
      { field: 'Split', header: 'Split' },
      { field: 'Parent', header: 'Parent' },
      { field: 'SplitCode', header: 'Split Code' },
      { field: 'Date', header: 'Date' },
    ];
    this.BudgensPromotionsColumn = [
      { field: 'MMID', header: 'MM ID' },
      { field: 'BookerDeal', header: 'Booker Deal' },
      { field: 'ConsumerDeal', header: 'Consumer Deal' },
      { field: 'Quantity', header: 'Quantity' },
      { field: 'PromoPrice', header: 'Promo Price' },
      { field: 'Type', header: 'Type' },
      { field: 'Select', header: 'Select' },
      { field: 'Posted', header: 'Posted' },
      { field: 'StartDate', header: 'StartDate' },
      { field: 'EndDate', header: 'EndDate' },
      { field: 'PromoID', header: 'PromoID' },
    ];
    this.BestOneItemColumn = [
      { field: 'BestoneCode', header: 'Bestone Code' },
      { field: 'Description', header: 'Description' },
      { field: 'CaseQuantity', header: 'Case Quantity' },
      { field: 'RetailPrice', header: 'Retail Price' },
      { field: 'CostPrice', header: 'Cost Price' },
      { field: 'PackDescription', header: 'Pack Description' },
      { field: 'Supplier', header: 'Supplier' },
    ];
    this.BestOneDownloadColumn = [
      { field: 'ID', header: 'ID' },
      { field: 'StartDate', header: 'Start Date' },
      { field: 'EndDate', header: 'End Date' },
      { field: 'Type', header: 'Type' },
      { field: 'Description', header: 'Description' },
      { field: 'Select', header: 'Select' },
      { field: 'Posted', header: 'Posted' },
      { field: 'PromoID', header: 'PromoID' },
    ];
    this.PriceChangesColumn = [
      { field: 'VenCode', header: 'VenCode' },
      { field: 'Barcode', header: 'Barcode' },
      { field: 'PackQty', header: 'Pack Qty' },
      { field: 'PackCost', header: 'Pack Cost' },
      { field: 'UnitCost', header: 'Unit Cost' },
      { field: 'RRP', header: 'RRP' },
      { field: 'Margin', header: 'Margin' },
      { field: 'VatCode', header: 'VatCode' },
      { field: 'Description', header: 'Description' },
      { field: 'PackSize', header: 'Pack Size' },
      { field: 'Split', header: 'Split' },
      { field: 'Parent', header: 'Parent' },
      { field: 'SplitCode', header: 'Split Code' },
      { field: 'EffectiveDate', header: 'Effective Date' },
    ];
    this.BookerPromotionColumn = [
      { field: 'VenCode', header: 'VenCode' },
      { field: 'Barcode', header: 'Barcode' },
      { field: 'PackQty', header: 'Pack Qty' },
      { field: 'PackCost', header: 'Pack Cost' },
      { field: 'UnitCost', header: 'Unit Cost' },
      { field: 'RRP', header: 'RRP' },
      { field: 'Margin', header: 'Margin' },
      { field: 'VatCode', header: 'VatCode' },
      { field: 'Description', header: 'Description' },
      { field: 'PackSize', header: 'Pack Size' },
      { field: 'Split', header: 'Split' },
      { field: 'StartSellingDate', header: 'Start Selling Date' },
      { field: 'EndSellingDate', header: 'End Selling Date' },
    ];
    this.MergePriceChangeColumn = [
      { field: 'ItemNo', header: 'ItemNo' },
      { field: 'VenCode', header: 'VenCode' },
      { field: 'Barcode', header: 'Barcode' },
      { field: 'Description', header: 'Description' },
      { field: 'PackSize', header: 'Pack Size' },
      { field: 'VatRate', header: 'VatRate' },
      { field: 'UnitCost', header: 'Unit Cost' },
      { field: 'RRP', header: 'RRP' },
      { field: 'Margin', header: 'Margin' },
      { field: 'Price', header: 'Price' },
      { field: 'EffectiveDate', header: 'Effective Date' },
      { field: 'Date', header: 'Date' },
    ];
    this.MergePromoItemsColumn = [
      { field: 'ItemNo', header: 'ItemNo' },
      { field: 'VenCode', header: 'VenCode' },
      { field: 'Barcode', header: 'Barcode' },
      { field: 'Description', header: 'Description' },
      { field: 'PackSize', header: 'Pack Size' },
      { field: 'VatRate', header: 'VatRate' },
      { field: 'UnitCost', header: 'Unit Cost' },
      { field: 'RRP', header: 'RRP' },
      { field: 'Margin', header: 'Margin' },
      { field: 'Price', header: 'Price' },
      { field: 'StartDate', header: 'StartDate' },
      { field: 'EndDate', header: 'EndDate' },
      { field: 'Date', header: 'Date' },
    ];
    this.BookerPromotionLinesColumn = [
      { field: 'Midas', header: 'Midas' },
      { field: 'ProductDescription', header: 'Product Description' },
      { field: 'PackSize', header: 'Pack Size' },
      { field: 'PromoSell', header: 'Promo Sell' },
      { field: 'RRP', header: 'RRP' },
      { field: 'Barcode', header: 'Barcode' },
      { field: 'ItemNo', header: 'ItemNo' },
      { field: 'PromoID', header: 'PromoID' },
      { field: 'Posted', header: 'Posted' },
    ];
    this.BookerDepartmentColumn = [
      { field: 'BookerID', header: 'BookerID' },
      { field: 'Department', header: 'Department' },
    ];
    this.DeliveryHeaderColumn = [
      { field: 'OrderNo', header: 'OrderNo' },
      { field: 'Description', header: 'Description' },
      { field: 'VendorNo', header: 'Vendor No' },
      { field: 'DeliveryDate', header: 'DeliveryDate' },
      { field: 'InvoiceNumber', header: 'InvoiceNumber' },
    ];
    this.StockCountListColumn = [
      { field: 'ID', header: 'ID' },
      { field: 'Description', header: 'Description' },
      { field: 'StaffName', header: 'StaffName' },
      { field: 'DateTime', header: 'DateTime' },
    ];
    this.BookOutListColumn = [
      { field: 'ID', header: 'ID' },
      { field: 'Description', header: 'Description' },
      { field: 'StaffName', header: 'StaffName' },
      { field: 'DateTime', header: 'DateTime' },
      { field: 'PostedBy', header: 'PostedBy' },
      { field: 'Vendor', header: 'Vendor' },
    ];
    this.AddItemListColumn = [
      { field: 'ID', header: 'ID' },
      { field: 'Description', header: 'Description' },
      { field: 'StaffName', header: 'StaffName' },
      { field: 'Date', header: 'Date' },
    ];
    this.LabelColumn = [
      { field: 'ItemNo', header: 'ItemNo' },
      { field: 'Barcode', header: 'Barcode' },
      { field: 'Description', header: 'Description' },
      { field: 'Price', header: 'Price' },
      { field: 'Department', header: 'Department' },
      { field: 'No_of_Labels', header: 'No_of_Labels' },
      { field: 'Printed', header: 'Printed' },
      { field: 'Source', header: 'Source' },
      { field: 'AddDate', header: 'AddDate' },
    ];
    this.PriceChangeColumn = [
      { field: 'ItemNo', header: 'ItemNo' },
      { field: 'Barcode', header: 'Barcode' },
      { field: 'OldPrice', header: 'Old Price' },
      { field: 'NewPrice', header: 'New Price' },
      { field: 'Description', header: 'Description' },
      { field: 'Department', header: 'Department' },
      { field: 'UOM', header: 'UOM' },
      { field: 'ReOPoint', header: 'ReO Point' },
      { field: 'ReoQty', header: 'Reo Qty' },
      { field: 'Label', header: 'Label' },
      { field: 'NoOfLabels', header: 'No Of Labels' },
    ];
    this.PriceStockColumn = [
      { field: 'ItemNo', header: 'ItemNo' },
      { field: 'Barcode', header: 'Barcode' },
      { field: 'OldPrice', header: 'Old Price' },
      { field: 'NewPrice', header: 'New Price' },
      { field: 'Description', header: 'Description' },
      { field: 'Department', header: 'Department' },
      { field: 'UOM', header: 'UOM' },
      { field: 'Stock', header: 'Stock' },
      { field: 'StockAddBy', header: 'Stock Add By' },
      { field: 'Label', header: 'Label' },
    ];
    this.QuickItemDepartmentsColumn = [
      { field: 'LineNo', header: 'Line No' },
      { field: 'QuickDepartment', header: 'Quick Department' },
      { field: 'StoreDepartment', header: 'Store Department' },
    ];
    this.POSItemsColumn = [
      { field: 'ItemNo', header: 'ItemNo' },
      { field: 'Barcode', header: 'Barcode' },
      { field: 'Description', header: 'Description' },
      { field: 'Price', header: 'Price' },
      { field: 'Department', header: 'Department' },
      { field: 'UOM', header: 'UOM' },
      { field: 'PackCost', header: 'Pack Cost' },
    ];
    this.VendorPriceChangeColumn = [
      { field: 'ID', header: 'Id' },
      { field: 'ItemNo', header: 'ItemNo' },
      { field: 'Barcode', header: 'Barcode' },
      { field: 'Description', header: 'Description' },
      { field: 'SellingPrice', header: 'Selling Price' },
      { field: 'RRP', header: 'RRP' },
      { field: 'Update', header: 'Update' },
    ];
  }
}
