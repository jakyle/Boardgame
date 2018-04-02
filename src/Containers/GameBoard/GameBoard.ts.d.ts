import { TileInfo } from '../../Models/Models';

export interface GameBoardState {
  clickHandler: (tile: TileInfo) => void
}
export interface GameBoardProps { }
export interface StoreProps {
  board: TileInfo[];
  currentTile: TileInfo;
}
export interface ConnectedStates { 
  onUpdateBoard: (tile: TileInfo) => void;
}

export type AllProps = 
  & GameBoardProps
  & StoreProps
  & ConnectedStates;