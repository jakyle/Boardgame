import * as React from 'react';
import Tile from '../../Components/Tile/Tile';
import { Dispatch, connect } from 'react-redux';
import { AllProps, GameBoardState, StoreProps, ConnectedStates } from './GameBoard.ts';
import Grid from '../../Components/Grid/Grid';
import './GameBoard.css';
import { ApplicationState } from '../../../Store';
import { BoardActions } from '../../../Store/Board/types';
import { TileInfo } from '../../../Models/Models';
import { updateBoard, defaultBoardSize } from '../../../Store/Board/action';

class GameBoard extends React.Component<AllProps, GameBoardState> {

  public clickHandler = (tile: TileInfo) => {
    tile.menuImage = this.props.selectedImage;
    this.props.onUpdateBoard(tile);
    this.forceUpdate();
  }

  componentWillMount() {
    if (this.props.board.length === 0) {
      this.props.onDefaultBoardSize();
    }
  }
  
  render() {
    const { board, size } = this.props;
    return (
      <div className="Game-Board">
        <Grid size={size}>
        {board.map((tile, index) => {
          return (<Tile
            clicked={this.clickHandler}
            key={index}
            tileInfo={tile}
          />);
        })}
      </Grid>
      </div>
      
    );
  }
}

const mapStateToProps = (state: ApplicationState): StoreProps => {
  const { currentTile, board, size } = state.board;
  const { selectedImage } = state.tileMenu;
  return { board, currentTile, size, selectedImage };
};
const mapDispatchToProps = (dispatch: Dispatch<BoardActions>): ConnectedStates => {
  return {
    onUpdateBoard: (tile) => dispatch(updateBoard(tile)),
    onDefaultBoardSize: () => dispatch(defaultBoardSize()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GameBoard);