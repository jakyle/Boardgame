import * as React from 'react';
// import { Link } from 'react-router-dom';
import { connect, Dispatch } from 'react-redux';
import { HomeState, AllProps, ConnectedStates } from './Home.ts';
import { createBoard } from '../../Store/Board/action';
import { BoardActions } from '../../Store/Board/types';
import { posValidation } from '../../util/util';
import PositionInputs from '../../Components/PositionInputs/PositionInputs';

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
    if (posValidation(pos.col) && posValidation(pos.row)) {
      this.props.onCreateBoard(pos);
      this.props.history.push('/playerpos');
    } else {
      const errorMessage = 'Invalid entry, enter a number range between 1 - 50 for both fields';
      this.setState({errorMessage});
    }
  }
  // create some sort of method that handles ... adding player one and player two token...
  render () {
    const { pos } = this.state;
    return (
      <div>
        <h1>Welcome to the boardgame app, please enter the number of rows and columns for your game</h1>
        <br />
        <h4>enter a number range between 1 - 50 for both fields.</h4>
        <PositionInputs pos={pos} handleChange={this.handleChangeFor} />
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
    onCreateBoard: (size) => dispatch(createBoard(size)),
  };
};

export default connect(undefined, mapDispatchToProps)(Home);
