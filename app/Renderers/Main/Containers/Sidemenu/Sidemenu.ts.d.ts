import { MenuImage } from "../../../Models/Models";

export interface SidemenuProps { }
export interface StoreProps {
  menuImages: MenuImage[],
  selectedImage?: MenuImage,
}
export interface SidemenuState { }
export interface ConnectedStates {
  onAddImages: (imagePaths: string[]) => void;
  onSelectedImage: (menuImage: MenuImage) => void;
}

export type AllProps = 
  & SidemenuProps
  & StoreProps
  & ConnectedStates;