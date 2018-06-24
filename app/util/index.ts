import { ipcMain, Event } from 'electron';

export {
  updateObject,
  posValidation
} from './util';

// tslint:disable-next-line:no-any
ipcMain.on('async-message', (event: Event, arg: string) => {
  console.log(arg);
  event.sender.send('async-reply', 'pong');
});

/* export {
  MenuImaging,
} from './MenuImaging'; */
