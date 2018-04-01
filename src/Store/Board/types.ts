import { Action } from 'redux';
import { TileInfo } from '../../Models/Models';

// all of my types for Cart action/reducer
export enum types {
  UPDATE_BOARD = '@@board/UPDATE_BOARD',
}
// interfaces for actions, notice that I am importing Actions from redux, this is just
// extra boilerplate to help keep my code extra typesafe.
export interface UpdateBoard extends Action {
  type: types.UPDATE_BOARD;
  payload: {
    tile: TileInfo
  };
}

// this is my board action, this will be exported to my reducers for the switch statement.
export type BoardActions =
  | UpdateBoard;

// this is the contract for my Carts state, the initial state
// will be defined in the actual reducer.
export interface BoardState {
  board: TileInfo[];
  currentTile: TileInfo;
}
