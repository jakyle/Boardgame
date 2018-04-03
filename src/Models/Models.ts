export enum Occupied {
  Empty,
  PlayerOne,
  PlayerTwo
}

export class TileInfo {
  location: TilePosition;
  occupied: Occupied;
}

export interface TilePosition {
  col: number;
  row: number;
}

export class TileImage extends TileInfo {
  image: string;
}