import * as React from 'react';
// import { Link } from 'react-router-dom';
import { connect, Dispatch } from 'react-redux';
import { HomeState, AllProps, ConnectedStates } from './Home.ts';
import { TilePosition } from '../../Models/Models';
import { createBoard } from '../../Store/Board/action';
import { BoardActions } from '../../Store/Board/types';

class Home extends React.Component<AllProps, HomeState> {

  state = {
    pos: {
      col: 0,
      row: 0,
    }
  };

  public handleChangeFor = (propertyName: string) => (event: React.FormEvent<HTMLInputElement>) => {
    const pos = {...this.state.pos};
    pos[propertyName] = event.currentTarget.value;
    this.setState({pos});   
  }

  public handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const pos = {...this.state.pos};
    debugger;
    this.props.onUpdateBoard(pos);
  }

  render () {
    const { col, row } = this.state.pos;
    return (
      <div>
        <h1>Welcome to the boardgame app, please enter the number of rows and columns for your game</h1>
        <br />
        <label>columns: </label>
        <input type="number" onChange={this.handleChangeFor('col')} value={col} />
        <label>rows: </label>
        <input type="number" onChange={this.handleChangeFor('row')} value={row} />
        <button onClick={this.handleSubmit} >Create Grid</button>
      </div>
    );
  }
} 

const mapDispatchToProps = (dispatch: Dispatch<BoardActions>): ConnectedStates => {
  return {
    onUpdateBoard: (size: TilePosition) => dispatch(createBoard(size)),
  };
};

export default connect(undefined, mapDispatchToProps)(Home);
