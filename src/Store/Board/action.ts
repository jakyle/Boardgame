import { ActionCreator } from 'redux';
// ActionCreator is an interface used to help keep my actions more typesafe. I just set the
// type of each of my actions as an actioncreator type with the action as the generic
// being passed in.  I also use the types and the interfaces from my typefles
// here to add definitions here to also stay type safe.
import {
  types,
  UpdateBoard,
  CreateBoard,
  PlacePlayers,
} from './types';
import { TileInfo, TilePosition } from '../../Models/Models';

// I like to pass in empty objects as payloads in case I end up changing the definition for
// my actions.  if I do this the payload section will be clear to me what its for, any
// parameters that I pass into the function will be ultimately passed into the payload
// property of this object.
export const updateBoard: ActionCreator<UpdateBoard> = (tile: TileInfo) => ({
  type: types.UPDATE_BOARD,
  payload: { tile },
});

export const createBoard: ActionCreator<CreateBoard> = (size: TilePosition) => ({
  type: types.CREATE_BOARD,
  payload: { size },
});

export const placePlayers: ActionCreator<PlacePlayers> = (playerOne: TilePosition, playerTwo: TilePosition) => ({
  type: types.PLACE_PLAYERS,
  payload: { playerOne, playerTwo }
});
