import { TileInfo, TilePosition, MenuImage } from "../../../Models/Models";

export interface GameBoardState {
  clickHandler: (tile: TileInfo) => void
}
export interface GameBoardProps { }
export interface StoreProps {
  board: TileInfo[];
  currentTile: TileInfo;
  size: TilePosition;
  selectedImage?: MenuImage;
}
export interface ConnectedStates { 
  onUpdateBoard: (tile: TileInfo) => void;
  onDefaultBoardSize: () => void;
}

export type AllProps = 
  & GameBoardProps
  & StoreProps
  & ConnectedStates;