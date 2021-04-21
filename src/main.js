const electron = require('electron');
const url = require('url');
const path = require('path');
// const { Menu, ipcMain } = require('electron');

const { app, BrowserWindow, Menu, ipcMain } = electron;

//Set ENV
// procedd.env.NODE_ENV = 'production';
  
let mainWindow;
let addWindow;

//Listen for app to be ready
app.on('ready', function () {
    //Create new window
    mainWindow = new BrowserWindow({
        webPreferences: {
            contextIsolation: true
          }
    });
    mainWindow.maximize();
    mainWindow.show();
    //Load html into window
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'home.component.html'),
        protocol: 'file:',
        slashes: true
    }));

    //Quit When Clode
    mainWindow.on('closed', function () {
        app.quit();
    });

    //Build menu
    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
    //Insert New
    Menu.setApplicationMenu(mainMenu);
}); 

//Handle create add window
function createAddWindow() {
    //Create new window
    addWindow = new BrowserWindow({
        // width: 500,
        // height: 300,
        webPreferences: {
            contextIsolation: true
        },
        title: 'Add Store List Item'
    });
    //Load html into window
    addWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'addWindow.html'),
        protocol: 'file:',
        slashes: true
    }));

    //Garbage collection handle
    addWindow.on('close', function () {
        addWindow = null;
    });
}

//Catch item:add
ipcMain.on('item:add', function (e, item) {
    // console.log(item);
    mainWindow.webContents.send('item:add', item);
    addWindow.close();
});

//Create menu template
const mainMenuTemplate = [
    // {}, //If mac add
    {
        label: 'File',
        submenu: [
            {
                label: 'Add Item',
                click() {
                    createAddWindow();
                }
            },
            {
                label: 'Clear Item',
                click() {
                    mainWindow.webContents.send('item:clear');
                }
            },
            {
                label: 'Quit',
                // accelerator: process.platform == 'darwin' ? 'Command+Q': 'Ctrl+Q',
                click() {
                    app.quit();
                }
            },
        ]
    }
];

//If mac add empty object to menu
if (process.platform == 'darwin') {
    mainMenuTemplate.unshift({});
}

//Add dev tools
if (process.env.NODE_ENV !== 'production') {
    mainMenuTemplate.push({
        label: 'Developer Tools',
        submenu: [{
            label: 'Toogle DevTools',
            // accelerator: process.platform == 'darwin' ? 'Command+Q': 'Ctrl+Q',
            click(item, focusedWindow) {
                focusedWindow.toggleDevTools();
            }
        },
        {
            role: 'reload'
        }]
    })
} 