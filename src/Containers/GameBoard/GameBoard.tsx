import * as React from 'react';
import './GameBoard.css';
import Tile from '../../Components/Tile/Tile';
import { Occupied, TileInfo, TileLocationData } from '../../Models/Models';
// import { SyntheticEvent } from 'react';

export interface GameBoardProps {
}

export interface GameBoardState {
  board: TileLocationData[];
  currentTile: TileInfo | null;
}

export default class GameBoard extends React.Component<GameBoardProps, GameBoardState> {

  state = {
    board:  [
      { key: {row: 0, col: 0}, value: Occupied.Empty }, 
      { key: {row: 0, col: 1}, value: Occupied.Empty }, 
      { key: {row: 0, col: 2}, value: Occupied.Empty },
      { key: {row: 0, col: 3}, value: Occupied.Empty }, 
      { key: {row: 0, col: 4}, value: Occupied.Empty }, 
      { key: {row: 1, col: 0}, value: Occupied.Empty },
      { key: {row: 1, col: 1}, value: Occupied.Empty }, 
      { key: {row: 1, col: 2}, value: Occupied.Empty }, 
      { key: {row: 1, col: 3}, value: Occupied.Empty },
      { key: {row: 1, col: 4}, value: Occupied.Empty },
      { key: {row: 2, col: 0}, value: Occupied.Empty },
      { key: {row: 2, col: 1}, value: Occupied.Empty },
      { key: {row: 2, col: 2}, value: Occupied.PlayerOne },
      { key: {row: 2, col: 3}, value: Occupied.Empty },
      { key: {row: 2, col: 4}, value: Occupied.Empty },
      { key: {row: 3, col: 0}, value: Occupied.Empty },
      { key: {row: 3, col: 1}, value: Occupied.Empty },
      { key: {row: 3, col: 2}, value: Occupied.Empty },
      { key: {row: 3, col: 3}, value: Occupied.Empty },
      { key: {row: 3, col: 4}, value: Occupied.Empty },
      { key: {row: 4, col: 0}, value: Occupied.Empty },
      { key: {row: 4, col: 1}, value: Occupied.Empty },
      { key: {row: 4, col: 2}, value: Occupied.Empty },
      { key: {row: 4, col: 3}, value: Occupied.PlayerTwo },
      { key: {row: 4, col: 4}, value: Occupied.Empty },
      { key: {row: 5, col: 0}, value: Occupied.Empty },
      { key: {row: 5, col: 1}, value: Occupied.Empty },
      { key: {row: 5, col: 2}, value: Occupied.Empty },
      { key: {row: 5, col: 3}, value: Occupied.Empty },
      { key: {row: 5, col: 4}, value: Occupied.Empty }
    ],
    currentTile: null,
  };

  public clickHandler = (tile: TileInfo) =>  {
    this.setState({currentTile: tile});
  }

  render() {
    const { board } = this.state;
    const tiles = board.map((obj, index) => {
      const curTile: TileInfo = { occupied: obj.value, position: { col: obj.key.col, row: obj.key.row }};
      return (<Tile clicked={this.clickHandler} key={index} tileInfo={curTile} />);
    });
    return (
      <div className="Game-Board">
        {tiles}
      </div>
    );
  }
}
