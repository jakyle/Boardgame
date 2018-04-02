import * as React from 'react';
// import { Link } from 'react-router-dom';
import { connect, Dispatch } from 'react-redux';
import { HomeState, AllProps, ConnectedStates } from './Home.ts';
import { TilePosition } from '../../Models/Models';
import { createBoard } from '../../Store/Board/action';
import { BoardActions } from '../../Store/Board/types';
import { posValidation } from '../../util/util';

class Home extends React.Component<AllProps, HomeState> {

  state = {
    pos: { col: 0, row: 0 },
    errorMessage: '',
  };

  public handleChangeFor = (propertyName: string) => (event: React.FormEvent<HTMLInputElement>) => {
    const pos = {...this.state.pos};
    pos[propertyName] = event.currentTarget.value;
    this.setState({pos });   
  }

  public handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const pos = {...this.state.pos};
    // const valid = {...this.state.valid};
    if (posValidation(pos.col) && posValidation(pos.row)) {
      this.props.onCreateBoard(pos);
      this.props.history.push('/board');
    } else {
      const errorMessage = 'Invalid entry, enter a number range between 1 - 50 for both fields';
      this.setState({errorMessage});
    }
    
  }

  render () {
    const { col, row } = this.state.pos;
    return (
      <div>
        <h1>Welcome to the boardgame app, please enter the number of rows and columns for your game</h1>
        <br />
        <h4>enter a number range between 1 - 50 for both fields.</h4>
        <label>rows: </label> <br />
        <input type="number" onChange={this.handleChangeFor('col')} value={col} /><br />
        <label>columns: </label><br />
        <input type="number" onChange={this.handleChangeFor('row')} value={row} /><br />
        <button onClick={this.handleSubmit} >Create Grid</button><br />
        {this.state.errorMessage.length > 0 
          ? <p>{this.state.errorMessage}</p> 
          : null
        }
      </div>
    );
  }
} 

const mapDispatchToProps = (dispatch: Dispatch<BoardActions>): ConnectedStates => {
  return {
    onCreateBoard: (size: TilePosition) => dispatch(createBoard(size)),
  };
};

export default connect(undefined, mapDispatchToProps)(Home);
