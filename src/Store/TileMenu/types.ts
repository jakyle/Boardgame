import { Action } from 'redux';

// all of my types for Cart action/reducer
export enum types {
  ADD_IMAGES = '@@board/ADD_IMAGES',
}
// interfaces for actions, notice that I am importing Actions from redux, this is just
// extra boilerplate to help keep my code extra typesafe.
export interface AddImages extends Action {
  type: types.ADD_IMAGES;
  payload: {
    imagePaths: string[]
  };
}

// this is my board action, this will be exported to my reducers for the switch statement.
export type TileMenuActions =
  | AddImages;

// this is the contract for my Carts state, the initial state
// will be defined in the actual reducer.
export interface TileMenuState {
  imagePaths: string[];
}
