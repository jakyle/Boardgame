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

  public handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const pos = {...this.state.pos};
    this.props.onUpdateBoard(pos);
    this.props.history.push('/board');
    // so I need to inheririt from react-router so I can access the history type with type safety.  
    // so I am simply trying to change the page to the page where the board displays. 
    // nothing a little referencing can't fix. cool now intellesense is no longer yelling at me :)
    // okay now for the moment of truth.  now that I am passing the user props, it will create a table for me 
    // without players mind you, then route me back to the proper page. I actually need to run the app to test it.
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
