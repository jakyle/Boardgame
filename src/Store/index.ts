import { combineReducers, Dispatch, Reducer } from 'redux';
import { routerReducer } from 'react-router-redux';

import boardReducer  from './Board/reducer';
import { BoardState } from './Board/types';

export interface ApplicationState {
  board: BoardState;
}
export const rootReducer: Reducer<ApplicationState> = combineReducers<ApplicationState>({
  router: routerReducer,
  board: boardReducer,
});
// Additional props for connected React components. This prop is passed by default with `connect()`
export interface ConnectedReduxProps<S> {
  // Correct types for the `dispatch` prop passed by `react-redux`.
  // Additional type information is given through generics.
  dispatch: Dispatch<S>;
}
