import { TilePosition } from "../../Models/Models";
import { RouteComponentProps } from "react-router";

export interface HomeState {
  pos: TilePosition
}

export interface StoreProps extends RouteComponentProps<{}> {}
export interface HomeProps {}
export interface ConnectedStates {
  onUpdateBoard: (size: TilePosition) => void;
}

export type AllProps = 
  & HomeProps
  & StoreProps
  & ConnectedStates;