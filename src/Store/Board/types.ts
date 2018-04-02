import { Action } from 'redux';
import { TileInfo, TilePosition } from '../../Models/Models';

// all of my types for Cart action/reducer
export enum types {
  UPDATE_BOARD = '@@board/UPDATE_BOARD',
  CREATE_BOARD = '@@board/CREATE_BOARD',
  PLACE_PLAYERS = '@@board/PLACE_PLAYERS',
}
// interfaces for actions, notice that I am importing Actions from redux, this is just
// extra boilerplate to help keep my code extra typesafe.
export interface UpdateBoard extends Action {
  type: types.UPDATE_BOARD;
  payload: {
    tile: TileInfo
  };
}

export interface CreateBoard extends Action {
  type: types.CREATE_BOARD;
  payload: {
    size: TilePosition
  };
}

export interface PlacePlayers extends Action {
  type: types.PLACE_PLAYERS;
  payload: {
    playerOne: TilePosition,
    playerTwo: TilePosition,
  };
}

// this is my board action, this will be exported to my reducers for the switch statement.
export type BoardActions =
  | UpdateBoard
  | CreateBoard
  | PlacePlayers;

// this is the contract for my Carts state, the initial state
// will be defined in the actual reducer.
export interface BoardState {
  size: TilePosition;
  board: TileInfo[];
  currentTile: TileInfo;
}
