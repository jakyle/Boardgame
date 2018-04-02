import { TilePosition } from "../../Models/Models";
import { RouteComponentProps } from "react-router";

export interface HomeState {
  pos: TilePosition
}

export interface StoreProps {}
export interface HomeProps extends RouteComponentProps<{}> {}
export interface ConnectedStates {
  onCreateBoard: (size: TilePosition) => void;
}

export type AllProps = 
  & HomeProps
  & StoreProps
  & ConnectedStates;