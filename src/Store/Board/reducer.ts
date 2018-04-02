import { Reducer } from 'redux';
import { types, BoardState, UpdateBoard, BoardActions, CreateBoard } from './types';
import { updateObject } from '../../util/';
import { Occupied, TileInfo } from '../../Models/Models';

const initialState: BoardState = {
  board: [ ],
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

  const tableSize = action.payload.size.col * action.payload.size.row;

  const board = new Array<TileInfo>(tableSize);
  let acc = 0;
  debugger;
  for (let i = 0; i < action.payload.size.col; i++) {
    for (let j = 0; j < action.payload.size.row; j++) {
      board[acc] = { location: { row: i + 1, col: j + 1 }, occupied: Occupied.Empty };
      acc++;
    }
  }

  // so right now im just more or less thinking about how I am going to tackle this next challenge...

  return updateObject(state, {board});
};

const reducer: Reducer<BoardState> = (state: BoardState = initialState, action: BoardActions) => {
  switch (action.type) {
    case types.UPDATE_BOARD: return updateBoard(state, action);
    case types.CREATE_BOARD: return createBoard(state, action);
    default: return state;
  }
};

export default reducer;
