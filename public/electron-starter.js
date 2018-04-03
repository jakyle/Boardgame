const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const isDev = require('electron-is-dev');
const path = require('path');
const { default: installExtension, REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS } = require('electron-devtools-installer');


let mainWindow;
function createWindow() {
  mainWindow = new BrowserWindow({width: 1920, height: 1080});
  mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`);
  if (process.platform === 'darwin') {
    app.setAboutPanelOptions({
        applicationName: "Boardgame",
        applicationVersion: "0.0.1",
        })
    }
  mainWindow.on('closed', () => mainWindow = null);
}

app.on('ready', createWindow);
app.on('ready', () => {
  [REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS].forEach(extension => {
    installExtension(extension)
        .then((name) => console.log(`Added Extension: ${name}`))
        .catch((err) => console.log('An error occurred: ', err));
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});

