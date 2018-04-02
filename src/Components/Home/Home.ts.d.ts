import { TilePosition } from "../../Models/Models";

export interface HomeState {
  pos: TilePosition
}

export interface StoreProps {}
export interface HomeProps {}
export interface ConnectedStates {
  onUpdateBoard: (size: TilePosition) => void;
}

export type AllProps = 
  & HomeProps
  & StoreProps
  & ConnectedStates;