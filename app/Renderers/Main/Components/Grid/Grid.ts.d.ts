import { ReactNode } from "react";
import { TilePosition } from "../../../Models/Models";

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