const {app, BrowserWindow} = require('electron')
let ipcMain = require('electron').ipcMain;

let loginWin
let mainWin
let registerWin

function createWindow() {
    // 创建浏览器窗口。
    loginWin = new BrowserWindow({
        width: 615,
        height: 500,
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true
        },
        resizable:false,
        frame: false,
    })
    loginWin.loadFile('login.html')

    // 打开开发者工具
    //win.webContents.openDevTools()

    loginWin.on('close', () => {
        loginWin = null
    })
}

ipcMain.on('login-success', (event, args) => {
    mainWin = new BrowserWindow({
        width:1000,
        height:600,
        webPreferences:{
            nodeIntegration:true,
            enableRemoteModule:true
        },
        resizable:false,
        frame:false,
    })
    loginWin.close()
    mainWin.loadFile("index.html")
})

ipcMain.on('login-error', function () {
})

ipcMain.on('login-close', function () {
    loginWin.close();
})

ipcMain.on('main-close', function () {
    mainWin.close();
})

ipcMain.on('register_open',function (){
    registerWin = new BrowserWindow({
        width:615,
        height:680,
        webPreferences:{
            nodeIntegration:true,
            enableRemoteModule:true
        },
        frame:false,
        resizable:false,
    })
    loginWin.close()
    registerWin.loadFile("register.html")
})

ipcMain.on('cancel_login',function (){
    loginWin = new BrowserWindow({
        width: 615,
        height: 500,
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true
        },
        frame: false,
        resizable:false,
    })
    registerWin.close()
    loginWin.loadFile('login.html')
})

app.on('ready', createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (loginWin === null) {
        createWindow()
    }
})
