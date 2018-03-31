export enum Occupied {
  Empty,
  PlayerOne,
  PlayerTwo
}

export interface TilePosition {
  col: number;
  row: number;
}

export class TileInfo {
  occupied: Occupied;
  position: TilePosition;
}