const { app, BrowserWindow } = require('electron')

function createWindow() {
    const win = new BrowserWindow({
       maximizable: true,
        webPreferences: {
            nodeIntegration: true
        }
    })

    // win.loadFile('.dist/angular-build/index.html')
    win.loadFile('.src/app/app.component.html')
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})