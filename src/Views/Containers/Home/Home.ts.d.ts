import { RouteComponentProps } from "react-router";
import { TilePosition } from "../../../Models/Models";

export interface PosValid {
  row: boolean;
  col: boolean;
}

export interface HomeState {
  pos: TilePosition;
  errorMessage: string;
  includePlayers: boolean;
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