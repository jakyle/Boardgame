import * as React from 'react';
import './Tile.css';
import { TileInfo, Occupied } from '../../../Models/Models';

interface TileProps {
  tileInfo: TileInfo;
  clicked: (tile: TileInfo) => void;
}

const Tile: React.SFC<TileProps> = ( {tileInfo, clicked }: TileProps) => {
  const img = tileInfo.menuImage !== undefined 
    ?  <img src={tileInfo.menuImage!.imagePath} height="100" width="100"/>
    : null;
  let tile: JSX.Element;
  switch (tileInfo.occupied) {
    case Occupied.PlayerOne:
      tile = (<div className="Player One">{img}</div>);
      break;
    case Occupied.PlayerTwo:
      tile = (<div className="Player Two">{img}</div>);
      break;
    default:
      tile = (<div>{img}</div>);
      break;
  }
  return (<div onClick={(e) => clicked(tileInfo)} className="Tile">{tile}</div>);
};

export default Tile;