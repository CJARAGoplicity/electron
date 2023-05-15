const { app, BrowserWindow } = require('electron');
const { autoUpdater } = require('electron-updater');

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });

  mainWindow.loadFile('src/index.html');
}

app.whenReady().then(() => {
  createWindow();
  autoUpdater.checkForUpdatesAndNotify();
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});

autoUpdater.on('update-downloaded', () => {
  autoUpdater.quitAndInstall();
});