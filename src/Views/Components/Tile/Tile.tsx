import * as React from 'react';
import './Tile.css';
import { TileInfo, Occupied } from '../../../Models/Models';

interface TileProps {
  tileInfo: TileInfo;
  clicked: (tile: TileInfo) => void;
}

const Tile: React.SFC<TileProps> = ( {tileInfo, clicked}: TileProps) => {
  let tile: JSX.Element;
  switch (tileInfo.occupied) {
    case Occupied.PlayerOne:
      tile = (<div className="Player One" />);
      break;
    case Occupied.PlayerTwo:
      tile = (<div className="Player Two" />);
      break;
    default:
      tile = (<></>);
      break;
  }
  return (<div onClick={(e) => clicked(tileInfo)} className="Tile">{tile}</div>);
};

export default Tile;