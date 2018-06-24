import { Reducer } from 'redux';
import { updateObject } from '../../../../util/';
import { 
  types,  
  TileMenuState, 
  AddImages, 
  TileMenuActions, 
  SelectImage
} from './types';
import { MenuImage } from '../../../../Models/Models';

const initialState: TileMenuState = {
  menuImages: new Array<MenuImage>(),
  selectedImage: undefined,
};

export const addImage = (state: TileMenuState, action: AddImages): TileMenuState => {
  const { imagePaths } = action.payload;
  const menuImages: MenuImage[] = imagePaths.map((path, index, arry) => {
    return {imagePath: path, id: index + 1, isSelected: false};
  });
  return updateObject(state, { menuImages });
};

export const selectImage = (state: TileMenuState, action: SelectImage): TileMenuState => {
  const { menuImage } = action.payload;
  let { menuImages, selectedImage } = state;
  menuImages.forEach(img => img.isSelected = false);
  selectedImage = menuImages.filter(img => img.id === menuImage.id)[0];
  selectedImage.isSelected = true;
  menuImages.filter(img => img.id === selectedImage!.id)[0] = selectedImage;
  return updateObject(state, { menuImage, selectedImage });
};

const reducer: Reducer<TileMenuState> = (state: TileMenuState = initialState, action: TileMenuActions) => {
  switch (action.type) {
    case types.ADD_IMAGES: return addImage(state, action);
    case types.SELECT_IMAGE: return selectImage(state, action);
    default: return state;
  }
};

export default reducer;
