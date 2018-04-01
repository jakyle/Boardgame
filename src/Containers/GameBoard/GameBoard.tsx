import * as React from 'react';
import './GameBoard.css';
import Tile from '../../Components/Tile/Tile';
import { Occupied, TileInfo } from '../../Models/Models';
// import { SyntheticEvent } from 'react';

export interface GameBoardProps {
}

export interface GameBoardState {
  board: Occupied[][];
  currentTile: TileInfo;
}

export default class GameBoard extends React.Component<GameBoardProps, GameBoardState> {

  state = {
    board: [
      [Occupied.Empty, Occupied.Empty, Occupied.Empty, Occupied.Empty, Occupied.Empty],
      [Occupied.Empty, Occupied.Empty, Occupied.PlayerTwo, Occupied.Empty, Occupied.Empty],
      [Occupied.Empty, Occupied.Empty, Occupied.Empty, Occupied.Empty, Occupied.Empty],
      [Occupied.Empty, Occupied.PlayerOne, Occupied.Empty, Occupied.Empty, Occupied.Empty],
      [Occupied.Empty, Occupied.Empty, Occupied.Empty, Occupied.Empty, Occupied.Empty],
    ],
    currentTile: {
      occupied: Occupied.Empty,
      position: {
        row: 0,
        col: 0
      }
    }
  };

  public clickHandler = (tile: TileInfo) =>  {
    this.setState({currentTile: tile});
  }

  render() {
    const { board } = this.state;
    const tiles = board.map((obj, row) => (
      <div key={`row ${row}`}>{obj.map((occupied, col) => {
          let curTile = { occupied, position: { col, row }};
          return (<Tile clicked={this.clickHandler} key={`col ${col}`} tileInfo={curTile} />);
        })}
      </div>
      ));
    return (
      <div className="Game-Board">
        {tiles}
        <h1>{this.state.currentTile.occupied}</h1>
        <h4>col: {this.state.currentTile.position.col}</h4>
        <h4>row: {this.state.currentTile.position.row}</h4>
      </div>
    );
  }
}
