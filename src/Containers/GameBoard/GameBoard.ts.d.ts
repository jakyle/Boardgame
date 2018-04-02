import { TileInfo, TilePosition } from '../../Models/Models';

export interface GameBoardState {
  clickHandler: (tile: TileInfo) => void
}
export interface GameBoardProps { }
export interface StoreProps {
  board: TileInfo[];
  currentTile: TileInfo;
  size: TilePosition;
}
export interface ConnectedStates { 
  onUpdateBoard: (tile: TileInfo) => void;
}

export type AllProps = 
  & GameBoardProps
  & StoreProps
  & ConnectedStates;