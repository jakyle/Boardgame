import { TilePosition } from "../../Models/Models";
import { ReactNode } from "react";

export interface GridProps  {
  size: TilePosition;
  children?: ReactNode;
}
export interface ConnectedStates { }
export interface StoreProps {}

export type AllProps = 
  & GridProps
  & StoreProps
  & ConnectedStates;