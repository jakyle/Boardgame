import { forwardToRenderer, triggerAlias, replayActionMain } from 'electron-redux';

import { 
  combineReducers, 
  Dispatch, 
  createStore, 
  applyMiddleware, 
  Store,
} from 'redux';
import { routerReducer } from 'react-router-redux';

export interface ApplicationState {
}
export const rootReducer = combineReducers<ApplicationState>({
  router: routerReducer,
});

const enhancer = applyMiddleware(triggerAlias, forwardToRenderer);

export const store: Store<ApplicationState> = createStore(rootReducer, enhancer);

replayActionMain(store);

// Additional props for connected React components. This prop is passed by default with `connect()`
export interface ConnectedReduxProps<S> {
  // Correct types for the `dispatch` prop passed by `react-redux`.
  // Additional type information is given through generics.
  dispatch: Dispatch<S>;
}
