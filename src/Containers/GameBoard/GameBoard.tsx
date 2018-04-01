import * as React from 'react';
import './GameBoard.css';
import Tile from '../../Components/Tile/Tile';
import { TileInfo } from '../../Models/Models';
import { ApplicationState } from '../../Store';
import { BoardActions } from '../../Store/Board/types';
import { Dispatch, connect } from 'react-redux';
import { updateBoard } from '../../Store/Board/action';
// import { SyntheticEvent } from 'react';

export interface GameBoardState { }
export interface GameBoardProps { }
export interface StoreProps {
  board: TileInfo[];
  currentTile: TileInfo;
}
export interface ConnectedStates { 
  onUpdateBoard: (tile: TileInfo) => void;
}

type AllProps = 
  & GameBoardProps
  & StoreProps
  & ConnectedStates;

class GameBoard extends React.Component<AllProps, GameBoardState> {

  public clickHandler = (tile: TileInfo) => {
    this.props.onUpdateBoard(tile);
    this.forceUpdate();
  }

  render() {
    const { board } = this.props;
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

const mapStateToProps = (state: ApplicationState): StoreProps => {
  const { currentTile, board } = state.board;
  return { board, currentTile };
};
const mapDispatchToProps = (dispatch: Dispatch<BoardActions>): ConnectedStates => {
  return {
    onUpdateBoard: (tile: TileInfo) => dispatch(updateBoard(tile)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GameBoard);