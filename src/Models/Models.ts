export enum Occupied {
  Empty,
  PlayerOne,
  PlayerTwo,
  Image
}

export class TileInfo {
  location: TilePosition;
  occupied: Occupied;
  imagePath?: string;
}

export interface TilePosition {
  col: number;
  row: number;
}
