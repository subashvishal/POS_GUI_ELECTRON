export class PathConstants {
  ///Dashboard

  ///Server Date 
  public static readonly SERVER_DATE = '/api/ServerDate';
  public static readonly LOGIN = '/pos/login';
  public static readonly REGISTER = '/pos/register';
  public static readonly ITEM_SEARCH = '/pos/getItems';

  //Sales Transaction
  public static readonly SALES_POST = '/pos/salesTransIns';
  public static readonly SALES_GET = '/pos/salesTransGet';

  //POsted Sales Transaction

  public static readonly TRANS_ID_GET = '/pos/transID';
  public static readonly POSTED_SALES_GET = '/pos/postedSalesGet';
  public static readonly POSTED_SALES_POST = '/pos/postedSalesIns';


  //Vendor
  public static readonly VENDOR_GET = '/Purchase-management/Vendor';


  ///Reatil Backoffice
  public static readonly STORE = '/retail/Store';
  public static readonly STORE_POST = '/api/Store/Post';
  public static readonly STAFF = '/api/Staff';
  public static readonly STAFF_POST = '/api/Staff/Post';
  public static readonly MAIN_MENU = '/retail/Menu_Header';
  public static readonly SUB_MENU = '/retail/Menu_Line';
  public static readonly ALL_MENU_POST = '/api/Menu/Post';
  public static readonly ITEM = '/pos/item_list';
  public static readonly RECEIPTHEADER = '/api/ReceiptHeader';
  public static readonly RECEIPTFOOTER = '/api/ReceiptFooter';
  public static readonly AUTHORIZATION = '/api/Autherization';

  //Stock Management
  public static readonly VAT = '/api/Vat';
  public static readonly DEPARTMENT = '/api/Department';
  public static readonly GROUP = '/api/Group';
  public static readonly SUB_GROUP = '/api/ItemSubGroup';
  public static readonly PROMOTION = '/api/Promotion';
  public static readonly BARCODE_MASK = '/api/BarcodeMask';
  public static readonly BARCODE = '/api/Barcode';
  public static readonly WEEKSUMMARY = '/api/WeekSummary';
  public static readonly PREFIX = '/api/Prefix';


  ///Menu&Login
  public static readonly MENU = '/api/Menu/Get';
  // public static readonly LOGIN = '/api/Users/Get';

  ///Reports


  ///Settings
  public static readonly SETTINGS_GET = '/api/Settings';

  ///TrackIP
  public static readonly IMAGE_UPLOAD = '/api/Upload';


  ///End
}
