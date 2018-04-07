import { Reducer } from 'redux';
import { types, BoardState, UpdateBoard, BoardActions, CreateBoard, PlacePlayers, DefaultBoardSize } from './types';
import { updateObject } from '../../util/';
import { Occupied, TileInfo } from '../../Models/Models';

const initialState: BoardState = {
  size: {col: -1, row: -1},
  board: [],
  currentTile: { location: { row: -1, col: -1 }, occupied: Occupied.Empty },
};

export const updateBoard = (state: BoardState, action: UpdateBoard): BoardState => {
  if (action.payload.tile.occupied !== Occupied.Empty) {
    return updateObject(state, {currentTile: action.payload.tile});
  } else {
    if (state.currentTile.occupied === Occupied.PlayerOne
      || state.currentTile.occupied === Occupied.PlayerTwo) {
      const { board } = state;
      const player = board.filter(x => x === state.currentTile)[0];
      const occupied = player.occupied;
      player.occupied = Occupied.Empty;
      board.filter(x => x === state.currentTile)[0] = player;
      // update selected whitespace to be new player.
      const whitespace = board.filter(x => x.location === action.payload.tile.location)[0];
      whitespace.occupied = occupied;
      board.filter(x => x.location === action.payload.tile.location)[0] = whitespace;
      return updateObject(state, { board });
    }
    return state;
  }
};

export const createBoard = (state: BoardState, action: CreateBoard): BoardState => {
  const size = action.payload.size;
  const tableSize = size.col * size.row;
  const board = new Array<TileInfo>(tableSize);
  let acc = 0;
  for (let i = 0; i < action.payload.size.col; i++) {
    for (let j = 0; j < action.payload.size.row; j++) {
      board[acc] = { location: { row: i + 1, col: j + 1 }, occupied: Occupied.Empty };
      acc++;
    }
  }
  return updateObject(state, {board, size});
};

export const placePlayers = (state: BoardState, action: PlacePlayers): BoardState => {
  const { playerOne, playerTwo } = action.payload;
  const { board } = state;
  // tslint:disable-next-line:triple-equals
  let playerOneTile = board.filter(t => t.location.col == playerOne.col && t.location.row == playerOne.row)[0];
  playerOneTile.occupied = Occupied.PlayerOne;
  board.filter(t => t.location === playerOneTile.location)[0] = playerOneTile;
  // tslint:disable-next-line:triple-equals
  let playerTwoTile = board.filter(t => t.location.col == playerTwo.col && t.location.row == playerTwo.row )[0];
  playerTwoTile.occupied = Occupied.PlayerTwo;
  board.filter(t => t.location === playerTwoTile.location)[0] = playerTwoTile;
  return updateObject(state, {board});
};

export const defaultBoardSize = (state: BoardState, action: DefaultBoardSize): BoardState => {
  const size = {col: 10, row: 10};
  const tableSize = size.col * size.row;
  const board = new Array<TileInfo>(tableSize);
  let acc = 0;
  for (let i = 0; i < size.col; i++) {
    for (let j = 0; j < size.row; j++) {
      board[acc] = { location: { row: i + 1, col: j + 1 }, occupied: Occupied.Empty };
      acc++;
    }
  }
  return updateObject(state, {size, board});
};

const reducer: Reducer<BoardState> = (state: BoardState = initialState, action: BoardActions) => {
  switch (action.type) {
    case types.UPDATE_BOARD: return updateBoard(state, action);
    case types.CREATE_BOARD: return createBoard(state, action);
    case types.PLACE_PLAYERS: return placePlayers(state, action);
    case types.DEFAULT_BOARD_SIZE: return defaultBoardSize(state, action);
    default: return state;
  }
};

export default reducer;
