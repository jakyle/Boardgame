import * as React from 'react';
import PositionInputs from '../../Components/PositionInputs/PositionInputs';
import { Dispatch, connect } from 'react-redux';
import { BoardActions } from '../../Store/Board/types';
import { placePlayers } from '../../Store/Board/action';
import { AllProps, PlayerPosState, ConnectedStates } from './Playerpos.ts';

class PlayerPos extends React.Component<AllProps, PlayerPosState> {
  
  state = {
    playerOne: {row: -1, col: -1},
    playerTwo: {row: -1, col: -1},
  };

  public handleChangeForPlayerOne = (propertyName: string) => (event: React.FormEvent<HTMLInputElement>) => {
    const playerOne = {...this.state.playerOne};
    playerOne[propertyName] = event.currentTarget.value;
    this.setState({playerOne});   
  }

  public handleChangeForPlayerTwo = (propertyName: string) => (event: React.FormEvent<HTMLInputElement>) => {
    const playerTwo = {...this.state.playerTwo};
    playerTwo[propertyName] = event.currentTarget.value;
    this.setState({playerTwo});   
  }

  public handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const state = {...this.state};
    this.props.onPlacePlayers(state.playerOne, state.playerTwo);
    this.props.history.push('/board');
  }

  render() {
    const { playerOne, playerTwo } = this.state;
    return (
      <div>
        <label>Player ONE position</label><br />
        <PositionInputs pos={playerOne} handleChange={this.handleChangeForPlayerOne} />
        <br /><br />
        <label>layer TWO position</label><br />
        <PositionInputs pos={playerTwo} handleChange={this.handleChangeForPlayerTwo} />
        <button onClick={this.handleSubmit} >Create Grid</button>
      </div>
      );
  }
}

const mapDispatchToProps = (dispatch: Dispatch<BoardActions>): ConnectedStates => {
  return {
    onPlacePlayers: (playerOne, playerTwo) => dispatch(placePlayers(playerOne, playerTwo)),
  };
};

export default connect(undefined, mapDispatchToProps)(PlayerPos);
