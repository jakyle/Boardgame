import { Reducer } from 'redux';
import { updateObject } from '../../util/';
import { 
  types,  
  TileMenuState, 
  AddImages, 
  TileMenuActions 
} from './types';

const initialState: TileMenuState = {
  imagePaths: new Array<string>()
};

export const createBoard = (state: TileMenuState, action: AddImages): TileMenuState => {
  const { imagePaths } = action.payload;
  return updateObject(state, { imagePaths });
};

const reducer: Reducer<TileMenuState> = (state: TileMenuState = initialState, action: TileMenuActions) => {
  switch (action.type) {
    case types.ADD_IMAGES: return createBoard(state, action);
    default: return state;
  }
};

export default reducer;
