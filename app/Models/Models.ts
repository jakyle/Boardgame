export enum Occupied {
  Empty,
  PlayerOne,
  PlayerTwo,
  Image
}

export class TileInfo {
  location: TilePosition;
  occupied: Occupied;
  menuImage?: MenuImage;
}

export interface TilePosition {
  col: number;
  row: number;
}

export interface MenuImage {
  imagePath: string;
  id: number;
  isSelected: boolean;
}