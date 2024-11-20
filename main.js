const { app, BrowserWindow } = require('electron');
const path = require('path');

// Funktion, um das Fenster zu erstellen
function createWindow() {
  // Erstelle ein Fenster
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    icon: path.join(__dirname, 'icon.png'),  // Optionales Icon
    webPreferences: {
      nodeIntegration: true, // Ermöglicht die Verwendung von Node.js in der Renderer-Prozess
    }
  });

  // Lade die HTML-Datei
  win.loadFile('index.html');

  // Öffne die Entwicklertools (optional)
  // win.webContents.openDevTools();
}

// Wenn Electron bereit ist, das Fenster zu öffnen
app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

// Beende die Anwendung, wenn alle Fenster geschlossen sind
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
