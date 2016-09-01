
import { ipcRenderer as ipc } from 'electron'
import { setLabelDir } from './actions'

ipc.on('selected-label-dir', (event, path) => {
  console.log('Label directory selected:' + path)
  store.dispatch(setLabelDir(path))
})
