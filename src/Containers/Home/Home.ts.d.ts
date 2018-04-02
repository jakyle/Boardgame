import { TilePosition } from "../../Models/Models";
import { RouteComponentProps } from "react-router";

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