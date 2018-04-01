import * as React from 'react';
import './GameBoard.css';
import Tile from '../../Components/Tile/Tile';
import { Occupied, TileInfo } from '../../Models/Models';
// import { SyntheticEvent } from 'react';

export interface GameBoardProps {
}

export interface GameBoardState {
  board: TileInfo[];
  currentTile: TileInfo | null;
}

export default class GameBoard extends React.Component<GameBoardProps, GameBoardState> {

  state = {
    board:  [
      { location: {row: 1, col: 1}, occupied: Occupied.Empty }, 
      { location: {row: 1, col: 2}, occupied: Occupied.Empty }, 
      { location: {row: 1, col: 3}, occupied: Occupied.Empty },
      { location: {row: 1, col: 4}, occupied: Occupied.Empty }, 
      { location: {row: 1, col: 5}, occupied: Occupied.Empty }, 
      { location: {row: 2, col: 1}, occupied: Occupied.Empty },
      { location: {row: 2, col: 2}, occupied: Occupied.Empty }, 
      { location: {row: 2, col: 3}, occupied: Occupied.Empty }, 
      { location: {row: 2, col: 4}, occupied: Occupied.PlayerTwo },
      { location: {row: 2, col: 5}, occupied: Occupied.Empty },
      { location: {row: 3, col: 1}, occupied: Occupied.Empty },
      { location: {row: 3, col: 2}, occupied: Occupied.Empty },
      { location: {row: 3, col: 3}, occupied: Occupied.Empty },
      { location: {row: 3, col: 4}, occupied: Occupied.Empty },
      { location: {row: 3, col: 5}, occupied: Occupied.Empty },
      { location: {row: 4, col: 1}, occupied: Occupied.Empty },
      { location: {row: 4, col: 2}, occupied: Occupied.PlayerOne },
      { location: {row: 4, col: 3}, occupied: Occupied.Empty },
      { location: {row: 4, col: 4}, occupied: Occupied.Empty },
      { location: {row: 4, col: 5}, occupied: Occupied.Empty },
      { location: {row: 5, col: 1}, occupied: Occupied.Empty },
      { location: {row: 5, col: 2}, occupied: Occupied.Empty },
      { location: {row: 5, col: 3}, occupied: Occupied.Empty },
      { location: {row: 5, col: 4}, occupied: Occupied.Empty },
      { location: {row: 5, col: 5}, occupied: Occupied.Empty },
    ],
    currentTile: null,
  };

  public clickHandler = (tile: TileInfo) =>  {
    this.setState({currentTile: tile});
  }

  render() {
    const { board } = this.state;
    const tiles = board.map((tile, index) => {
      return (<Tile clicked={this.clickHandler} key={index} tileInfo={tile} />);
    });
    return (
      <div className="Game-Board">
        {tiles}
      </div>
    );
  }
}
