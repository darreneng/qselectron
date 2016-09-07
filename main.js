const electron = require('electron')
// Module to control application life.
const app = electron.app
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({width: 800, height: 600})

  // and load the index.html of the app.
  // TODO change build/ directory??
  mainWindow.loadURL(`file://${__dirname}/build/index.html`)

  // Open the DevTools.
  //mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })

  // add extension
  //BrowserWindow.addDevToolsExtension('/Users/darreneng/Library/Application Support/Google/Chrome/Default/Extensions/fmkadmapgofadopljbjfkapdkoienihi/0.15.4_0')
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

// Dialog stuff
const ipc = electron.ipcMain
const dialog = electron.dialog
const fs = require('fs')
const path = require('path')

let labelDir = ''
let image = ''
let dirimages = []
ipc.on('label-dir-dialog', (event) => {
  console.log('label-dir-dialog selected')
  dialog.showOpenDialog(mainWindow, {
    properties: [ 'openDirectory' ]
  }, (files) => {
    if (files) {
      labelDir = files[0]
      event.sender.send('selected-label-dir', labelDir)
    }
  })
})

ipc.on('label-write-dialog', (event, crops) => {
  if (labelDir) {
    console.log(path.basename(image))
    writePath = path.join(labelDir,
                    path.basename(image, path.extname(image)) + '.txt')
    // We are writing the current crop. Future implementation should writePath
    // saved crops instead
    c = crops.current
    str = `sa 0 0 0 ${c.tlx} ${c.tly} ${c.brx} ${c.bry} 0 0 0 0 0 0 0\n`
    fs.writeFile(writePath, str, (err) => {
      if (err) console.log(err)
      event.sender.send('label-write-success', writePath)
    })
  } else {
    event.sender.send('label-write-error')
  }
})

ipc.on('choose-image-dialog', (event) => {
  dialog.showOpenDialog(mainWindow, {
    properties: ['openFile'],
    filters: [
      {name: 'Images', extensions: ['jpg', 'png', 'gif', 'bmp']}
    ]}, (files) => {
    if (files) {
      image = files[0]
      event.sender.send('selected-image', image)

      dirimages = fs.readdirSync(path.dirname(image))
    }
  })
})

ipc.on('next-image', (event, next) => {
  console.log(image)
  console.log(dirimages)
  let imageIdx = dirimages.findIndex(e => {return e === path.basename(image)})
  if (next) {
    imageIdx = ++imageIdx < dirimages.length ? imageIdx : 0
  } else {
    imageIdx = --imageIdx > -1 ? imageIdx : dirimages.length - 1
  }
  image = path.join(path.dirname(image), dirimages[imageIdx])
  event.sender.send('selected-image', image)
})
// End Dialog stuff
