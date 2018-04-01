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

  selectedTitle: TileInfo | null = null;

  state = {
    board: [
      { location: { row: 1, col: 1 }, occupied: Occupied.Empty },
      { location: { row: 1, col: 2 }, occupied: Occupied.Empty },
      { location: { row: 1, col: 3 }, occupied: Occupied.Empty },
      { location: { row: 1, col: 4 }, occupied: Occupied.Empty },
      { location: { row: 1, col: 5 }, occupied: Occupied.Empty },
      { location: { row: 2, col: 1 }, occupied: Occupied.Empty },
      { location: { row: 2, col: 2 }, occupied: Occupied.Empty },
      { location: { row: 2, col: 3 }, occupied: Occupied.Empty },
      { location: { row: 2, col: 4 }, occupied: Occupied.PlayerTwo },
      { location: { row: 2, col: 5 }, occupied: Occupied.Empty },
      { location: { row: 3, col: 1 }, occupied: Occupied.Empty },
      { location: { row: 3, col: 2 }, occupied: Occupied.Empty },
      { location: { row: 3, col: 3 }, occupied: Occupied.Empty },
      { location: { row: 3, col: 4 }, occupied: Occupied.Empty },
      { location: { row: 3, col: 5 }, occupied: Occupied.Empty },
      { location: { row: 4, col: 1 }, occupied: Occupied.Empty },
      { location: { row: 4, col: 2 }, occupied: Occupied.PlayerOne },
      { location: { row: 4, col: 3 }, occupied: Occupied.Empty },
      { location: { row: 4, col: 4 }, occupied: Occupied.Empty },
      { location: { row: 4, col: 5 }, occupied: Occupied.Empty },
      { location: { row: 5, col: 1 }, occupied: Occupied.Empty },
      { location: { row: 5, col: 2 }, occupied: Occupied.Empty },
      { location: { row: 5, col: 3 }, occupied: Occupied.Empty },
      { location: { row: 5, col: 4 }, occupied: Occupied.Empty },
      { location: { row: 5, col: 5 }, occupied: Occupied.Empty },
    ],

    // init currentTile to non gameboard square to avoid null problems
    currentTile: { location: { row: -1, col: -1 }, occupied: Occupied.Empty }
  };

  public clickHandler = (tile: TileInfo) => {
    const board = [...this.state.board];

    // Selected a Player
    if (tile.occupied !== Occupied.Empty) {
      this.setState({ currentTile: tile });
    } else {
      // selected whitespace.

      // only set if currentTile.occupied is set to a player,
      // (it is set to whitespace by default and at the end of this code block).
      if (this.state.currentTile.occupied === Occupied.PlayerOne
        || this.state.currentTile.occupied === Occupied.PlayerTwo) {

        // remove player from the board.
        // setting player.occupied to empty also sets currentTile,
        // idk why that's the case, so store it's value in a local variable.
        let player = board.filter(x => x === this.state.currentTile)[0];
        let occupied = player.occupied;
        player.occupied = Occupied.Empty;
        board.filter(x => x === this.state.currentTile)[0] = player;

        // update selected whitespace to be new player.
        let whitespace = board.filter(x => x.location === tile.location)[0];
        whitespace.occupied = occupied;
        board.filter(x => x.location === tile.location)[0] = whitespace;
        this.setState({ board });
      }
    }
  }

  render() {
    const { board } = this.state;
    return (
      <div className="Game-Board">
        {board.map((tile, index) => (
          <Tile
            clicked={this.clickHandler}
            key={index}
            tileInfo={tile}
          />))}
      </div>
    );
  }
}
