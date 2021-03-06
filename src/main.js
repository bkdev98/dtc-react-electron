const electron = require('electron');
const path = require('path');
const url = require('url');

const app = electron.app;
const dialog = electron.dialog;
const BrowserWindow = electron.BrowserWindow;

let mainWindow;

const LOAD_URL = process.env.DEV_URL || url.format({
  pathname: path.join(__dirname, '/../build/index.html'),
  protocol: 'file:',
  slashes: true,
});

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 500,
    height: 390,
    resizable: false,
    title: 'Form1',
    backgroundColor: '#FFFFFF',
    webPreferences: {
      webSecurity: false,
    },
  });

  // mainWindow.webContents.openDevTools();

  mainWindow.loadURL(LOAD_URL);

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  mainWindow.on('close', (e) => {
    if (app.showExitPrompt) {
      e.preventDefault();
      dialog.showMessageBox({
        type: 'question',
        buttons: ['Yes', 'No'],
        title: 'Confirm',
        message: 'Are you sure to exit?',
      }, (response) => {
        if (response === 0) {
          app.showExitPrompt = false;
          mainWindow.close();
        }
      });
    }
  });
}

app.showExitPrompt = true;

app.on('ready', () => {
  createWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
