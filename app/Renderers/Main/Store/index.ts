import {
  getInitialStateRenderer, 
  forwardToMain, 
  replayActionRenderer 
} from 'electron-redux';

import { 
  combineReducers, 
  Dispatch, 
  compose, 
  createStore, 
  applyMiddleware, 
  Store,
} from 'redux';
import { routerReducer } from 'react-router-redux';

import boardReducer  from './Board/reducer';
import tileMenuReducer from './TileMenu/reducer';
import { BoardState } from './Board/types';
import { TileMenuState } from './TileMenu/types';

export interface ApplicationState {
  board: BoardState;
  tileMenu: TileMenuState;
}
export const rootReducer = combineReducers<ApplicationState>({
  router: routerReducer,
  board: boardReducer,
  tileMenu: tileMenuReducer,
});

const initialState = getInitialStateRenderer();

declare global {
  // tslint:disable-next-line:no-any
  interface Window { __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any; }
}
const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose;
const enhancer = composeEnhancers(
  applyMiddleware(forwardToMain)
);

export const store: Store<ApplicationState> = createStore(rootReducer, initialState, enhancer);

replayActionRenderer(store);

// Additional props for connected React components. This prop is passed by default with `connect()`
export interface ConnectedReduxProps<S> {
  // Correct types for the `dispatch` prop passed by `react-redux`.
  // Additional type information is given through generics.
  dispatch: Dispatch<S>;
}
