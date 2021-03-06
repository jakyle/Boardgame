import * as React from 'react';
// import { Link } from 'react-router-dom';
import { connect, Dispatch } from 'react-redux';
import { HomeState, AllProps, ConnectedStates } from './Home.ts';
import PositionInputs from '../../Components/PositionInputs/PositionInputs';
import { createBoard } from '../../../Store/Board/action';
import { BoardActions } from '../../../Store/Board/types';
import { posValidation } from '../../../util';
import { ipcRenderer, Event } from 'electron';

class Home extends React.Component<AllProps, HomeState> {

  state = {
    includePlayers: false,
    pos: { col: 0, row: 0 },
    errorMessage: '',
  };

  public handleChangeFor = (propertyName: string) => (event: React.FormEvent<HTMLInputElement>) => {
    if (propertyName === 'includePlayers') {
      const {includePlayers} = this.state;
      this.setState({includePlayers: !includePlayers});
    } else {
      const pos = {...this.state.pos};
      pos[propertyName] = event.currentTarget.value;
      this.setState({pos }); 
    }
  }

  public handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const pos = {...this.state.pos};
    if (posValidation(pos.col) && posValidation(pos.row)) {
      this.props.onCreateBoard(pos);
      this.state.includePlayers 
        ? this.props.history.push('/playerpos')
        : this.props.history.push('/createmap');
    } else {
      const errorMessage = 'Invalid entry, enter a number range between 1 - 50 for both fields';
      this.setState({errorMessage});
    }
  }

  public handleIpc = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    
    ipcRenderer.on('async-reply', (ipcEvent: Event, arg: string) => console.log(arg));
    ipcRenderer.send('async-message', 'ping');
  }

  // create some sort of method that handles ... adding player one and player two token...
  render () {
    const { pos } = this.state;
    return (
      <div>
        <h1>Welcome to the tabletop wip app</h1>
        <h2>please enter the number of rows and columns for your game</h2>
        <br />
        <h4>enter a number range between 1 - 50 for both fields.</h4>
        <PositionInputs pos={pos} handleChange={this.handleChangeFor} />
        {/* <label>Check if you would like to place player one and two</label><br /> */}
{/*         <input 
          type="checkbox"
          onChange={this.handleChangeFor('includePlayers')} 
          checked={this.state.includePlayers} 
        /> <br /> */}
        <button onClick={this.handleSubmit}>Create Grid</button><br />
        {this.state.errorMessage.length > 0 
          ? <p>{this.state.errorMessage}</p> 
          : null
        }
        <button onClick={this.handleIpc}>Process Message</button>
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
