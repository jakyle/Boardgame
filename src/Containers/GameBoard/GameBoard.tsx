import * as React from 'react';
import Tile from '../../Components/Tile/Tile';
import { TileInfo } from '../../Models/Models';
import { ApplicationState } from '../../Store';
import { BoardActions } from '../../Store/Board/types';
import { Dispatch, connect } from 'react-redux';
import { updateBoard } from '../../Store/Board/action';
import { AllProps, GameBoardState, StoreProps, ConnectedStates } from './GameBoard.ts';
import Grid from '../../Components/Grid/Grid';

class GameBoard extends React.Component<AllProps, GameBoardState> {

  public clickHandler = (tile: TileInfo) => {
    this.props.onUpdateBoard(tile);
    this.forceUpdate();
  }
  
  render() {
    const { board, size } = this.props;
    return (
      <Grid size={size}>
        {board.map((tile, index) => (
          <Tile
            clicked={this.clickHandler}
            key={index}
            tileInfo={tile}
          />))}
      </Grid>
    );
  }
}

const mapStateToProps = (state: ApplicationState): StoreProps => {
  const { currentTile, board, size } = state.board;
  return { board, currentTile, size };
};
const mapDispatchToProps = (dispatch: Dispatch<BoardActions>): ConnectedStates => {
  return {
    onUpdateBoard: (tile: TileInfo) => dispatch(updateBoard(tile)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GameBoard);