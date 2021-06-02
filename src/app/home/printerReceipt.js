let { remote } = require("electron");
const { PosPrinter} = remote.require("electron-pos-printer");


const items = [
  {
     "Trans_ID":0,
     "Staff_ID":333,
     "Number":13248,
     "VAT_Code":null,
     "Description":"YELLOW PLANTAIN 1",
     "Price":1.99,
     "Quantity":4
  },
  {
     "Trans_ID":0,
     "Staff_ID":333,
     "Number":13248,
     "VAT_Code":null,
     "Description":"YELLOW PLANTAIN 2",
     "Price":1.99,
     "Quantity":3
  },
  {
     "Trans_ID":0,
     "Staff_ID":333,
     "Number":13248,
     "VAT_Code":null,
     "Description":"YELLOW PLANTAIN 4",
     "Price":1.99,
     "Quantity":5
  },
  {
     "Trans_ID":0,
     "Staff_ID":333,
     "Number":13248,
     "VAT_Code":null,
     "Description":"YELLOW PLANTAIN 5",
     "Price":1.99,
     "Quantity":5
  },
  {
     "Trans_ID":0,
     "Staff_ID":333,
     "Number":13248,
     "VAT_Code":null,
     "Description":"YELLOW PLANTAIN 6",
     "Price":1.99,
     "Quantity":5
  },
  {
     "Trans_ID":0,
     "Staff_ID":333,
     "Number":13248,
     "VAT_Code":null,
     "Description":"YELLOW PLANTAIN 7",
     "Price":1.99,
     "Quantity":5
  },
  {
     "Trans_ID":0,
     "Staff_ID":333,
     "Number":13248,
     "VAT_Code":null,
     "Description":"YELLOW PLANTAIN 8",
     "Price":1.99,
     "Quantity":5
  },
  {
     "Trans_ID":0,
     "Staff_ID":333,
     "Number":13248,
     "VAT_Code":null,
     "Description":"YELLOW PLANTAIN 9",
     "Price":1.99,
     "Quantity":5
  },
  {
     "Trans_ID":0,
     "Staff_ID":333,
     "Number":13248,
     "VAT_Code":null,
     "Description":"YELLOW PLANTAIN 10",
     "Price":1.99,
     "Quantity":5
  },
  {
     "Trans_ID":0,
     "Staff_ID":333,
     "Number":13248,
     "VAT_Code":null,
     "Description":"YELLOW PLANTAIN 11",
     "Price":1.99,
     "Quantity":5
  }
]

currentDate = []
function date(){
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  today = mm + '/' + dd + '/' + yyyy;
  currentDate.push(today);
}
date();

const itemsList = []
for (a in items) {
  itemsList.push([items[a].Quantity,items[a].Description,items[a].Price,items[a].Price]);
}

var noOfItems = []
let temp = items.reduce((acc,cur) => acc + cur.Quantity,0);
noOfItems.push(temp);

var subTotal = []
let total = items.reduce((acc,cur) => acc + cur.Price,0);
subTotal.push(['*','SUBTOTAL',total])

var cardTotal = []
let card = items.reduce((acc,cur) => acc + cur.Price,0);
cardTotal.push(['*','CARD PAYMENT',card]);

const ItemTable = {
  type: 'table',
  // style the table
  style: 'text-align:left',
  // list of the columns to be rendered in the table header
  tableHeader: ['Quantity', 'Item' ,'Price', 'Price'],
  // multi dimensional array depicting the rows and columns of the table body
  tableBody: itemsList,
  // custom style for the table header
  tableHeaderStyle: 'visibility:collapse',
  // custom style for the table body
  //tableBodyStyle: 'border: 0.5px solid #ddd',
  css: {"font-weight": "700", "font-size": "12px","text-align":"center","border-collapse":"separate","width":"90%","margin-left":"8px"},
  // custom style for the table footer
  //tableFooterStyle: 'background-color: #000; color: white;',
}
const data = [
  {
    type: 'text',                                       // 'text' | 'barCode' | 'qrCode' | 'image' | 'table
    value: 'Spice Of Asia',
    position: 'center',
    style: `text-align:center;`,
    css: {"font-weight": "bold", "font-size": "13px","color":"black"}
  },
  {
    type: 'text',                                      
    value: 'Unit 1 398 gorgia road',
    position: 'center',
    style: `text-align:center`,
    css: {"font-weight": "bold", "font-size": "13px"}
  },
  {
    type: 'text',                                      
    value: 'EINBURGH - EH11 2RN',
    position: 'center',
    style: `text-align:center`,
    css: {"font-weight": "bold", "font-size": "13px"}
  },
  {
    type: 'text',                                    
    value: `TEL : ${items[0].Number}`,
    position: 'center',
    style: `text-align:center;`,
    css: {"font-weight": "bold", "font-size": "13px"}
  },
  {
    type: 'text',                                       
    value: `OPEN: MON_SAT 9AM-9PM SUN10AM-8PM`,
    position: 'center',
    style: `text-align:center;`,
    css: {"font-weight": "bold", "font-size": "13px"}
  },
  {
    type: 'text',                                      
    value: '----------------------------------------',
    //position: 'center',
    style: `text-align:center;`,
    css: {"font-weight": "bold", "font-size": "15px"}
  },
  // Trans ID // staff id
  {
    type: 'text',                                  
    value: `TRANS ID - ${items[0].Trans_ID}`,
    position: 'left',
    style: `margin-left: 35px`,
    css: {"font-weight": "bold", "font-size": "13px"}
  },
  {
    type: 'text',                                      
    value: `STAFF ID - ${items[0].Staff_ID}`,
    //position: 'left',
    style: `margin-left: 35px;`,
    css: {"font-weight": "bold", "font-size": "13px"}
  },
  {
    type: 'text',                                       
    value: `Date: ${currentDate[0]} 17:25`,
    //position: 'left',
    css: {"font-weight": "bold", "font-size": "13px","margin-left": "159px","margin-top": "-19px","margin-bottom": "6px"}
  },
  {
    type: 'text',                                      
    value: '---------------------------------------',
    style: `text-align:center;`,
    css: {"font-weight": "700", "font-size": "18px"}
  },

  ItemTable // Items list formation on top inside ItemnTable variable 
  ,
  {
    type: 'text',                                      
    value: '---------------------------------------',
    style: `text-align:center;`,
    css: {"font-weight": "700", "font-size": "18px"}
  },
 {

  type: 'table',
  // style the table
  style: 'text-align:center',
  // list of the columns to be rendered in the table header
  tableHeader: ['id','SubTotal', 'Cash payment'],
  tableBody: [subTotal[0]],
  tableHeaderStyle: 'visibility:collapse',
  css: {"font-weight": "700", "font-size": "18x","border-collapse":"separate","margin-left":"30px"},
 },
 {
  type: 'text',                                       
  value: '---------------------------------------',
  style: `text-align:center;`,
  css: {"font-weight": "700", "font-size": "18px"}
},
 {

  type: 'table',
  // style the table
  style: 'text-align:center',
  tableHeader: ['id','SubTotal', 'Cash payment'],
  tableBody: [cardTotal[0]],
  tableHeaderStyle: 'visibility:collapse',
  css: {"font-weight": "700", "font-size": "18x","border-collapse":"separate","margin-left":"30px"},
 },
 {
  type: 'text',                                       // 'text' | 'barCode' | 'qrCode' | 'image' | 'table
  value: '---------------------------------------',
  style: `text-align:center;`,
  css: {"font-weight": "700", "font-size": "18px"}
},
 {

  type: 'text',
 value: `* Number of Items ${noOfItems[0]} *`,
 position: 'center',
 style: `text-align:center;`,
 css: {"font-weight": "700", "font-size": "20px"}
 },
 {
  type: 'text',                                       // 'text' | 'barCode' | 'qrCode' | 'image' | 'table
  value: '---------------------------------------',
  style: `text-align:center;`,
  css: {"font-weight": "700", "font-size": "18px"}
},
{
  type: 'text',                                       // 'text' | 'barCode' | 'qrCode' | 'image' | 'table
  value: 'Thank you for your custom!',
  position: 'center',
  style: `text-align:center;`,
  css: {"font-weight": "700", "font-size": "16px"}
},
{
  type: 'text',                                       // 'text' | 'barCode' | 'qrCode' | 'image' | 'table
  value: 'Please Come again!',
  position: 'center',
  style: `text-align:center;`,
  css: {"font-weight": "700", "font-size": "16px"}
},
{
  type: 'text',                                       // 'text' | 'barCode' | 'qrCode' | 'image' | 'table
  value: 'Please keep receipt to retun the items. RETURNS NOT ACCEPTED FOR VEG & CHILLED, FROZEN',
  position: 'center',
  style: `text-align:center;`,
  css: {"font-weight": "700", "font-size": "14px"}
},
,
{
  type: 'text',                                       // 'text' | 'barCode' | 'qrCode' | 'image' | 'table
  value: `VAT : ${items[0].VAT_Code}`,
  position: 'center',
  style: `text-align:center;`,
  css: {"font-weight": "700", "font-size": "14px"}
}
  ]


function print() {
  let printerName = 'EPSON TM-T82X Receipt';
  const options = {
    preview: true, // Preview in window or print
    width: '320px', //  width of content body
    //margin: '0 0 0 2px',
    copies: 1, // Number of copies to print
    printerName: printerName, // printerName: string, check it at webContent.getPrinters()
    timeOutPerLine: 400,
    silent: true,
    //pageSize: { height: 301000, width: 71000 }  // page size
  };

  // const now = {
  //   type: "text",
  //   value: "" + date(),
  //   style: `text-align:center;`,
  //   css: { "font-size": "12px", "font-family": "sans-serif" },
  // };

  //const d = [...data, now];
  PosPrinter.print(data, options)
  .then(() => {})
  .catch((error) => {
    console.error(error);
  });
  // if (printerName && widthPage) {
    
  // } else {
  //   alert("Select the printer and the width");
  // }
}
