import { RouteComponentProps } from "react-router";
import { TilePosition } from "../../../Models/Models";

export interface PlayerPosProps extends RouteComponentProps<{}> {
}
export interface ConnectedStates {
  onPlacePlayers: (playerOne: TilePosition, playerTwo: TilePosition) => void;
}

export interface PlayerPosState {
  playerOne: TilePosition;
  playerTwo: TilePosition;
}

export type AllProps = 
  & PlayerPosProps
  & ConnectedStates;