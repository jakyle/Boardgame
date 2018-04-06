import { Action } from 'redux';
import { MenuImage } from '../../Models/Models';

// all of my types for Cart action/reducer
export enum types {
  ADD_IMAGES = '@@Tilemenu/ADD_IMAGES',
  SELECT_IMAGE = '@@Tilemenu/SELECT_IMAGE',
}
// interfaces for actions, notice that I am importing Actions from redux, this is just
// extra boilerplate to help keep my code extra typesafe.
export interface AddImages extends Action {
  type: types.ADD_IMAGES;
  payload: {
    imagePaths: string[]
  };
}

export interface SelectImage extends Action {
  type: types.SELECT_IMAGE;
  payload: {
    menuImage: MenuImage,
  };
}

// this is my board action, this will be exported to my reducers for the switch statement.
export type TileMenuActions =
  | AddImages
  | SelectImage;

// this is the contract for my Carts state, the initial state
// will be defined in the actual reducer.
export interface TileMenuState {
  menuImages: MenuImage[];
  selectedImage: MenuImage | null;
}
