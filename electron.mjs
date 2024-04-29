import { app, BrowserWindow } from 'electron';
import isDev from 'electron-is-dev';
import { fileURLToPath } from 'url';
import path from 'path';

// const { app, BrowserWindow } = require('electron');
// const isDev = require('electron-is-dev');

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function createWindow() {
    let mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        },
    });

    const startUrl = isDev
        ? 'http://localhost:3000'
        : `file://${path.join(__dirname, '../build/index.html')}`;
    mainWindow.loadURL(startUrl);

    mainWindow.on('closed', function () {
        mainWindow = null;
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
