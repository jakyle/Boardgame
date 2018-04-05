import * as React from 'react';
import { remote } from 'electron';
import './Sidemenu.css';
import { getFiles } from '../../../util';
import { connect, Dispatch } from 'react-redux';
import { ApplicationState } from '../../../Store';
import { AllProps, SidemenuState, StoreProps, ConnectedStates } from './Sidemenu.ts';
import { TileMenuActions } from '../../../Store/TileMenu/types';
import { addImages } from '../../../Store/TileMenu/action';
// import { TileImage } from '../../Models/Models';

class Sidemenu extends React.Component<AllProps, SidemenuState> {

  public buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    let imagePaths = {...this.props.imagePaths};
    imagePaths = getFiles(remote.dialog.showOpenDialog({properties: ['openDirectory']})[0]);
    this.props.onAddImages(imagePaths);
  }

  public render() {
    const { imagePaths } = this.props;
    return (
      <div className="Side-Menu">
        <button onClick={this.buttonHandler} >Get Files</button>
        {imagePaths.length >= 1 
        ? <div className="Side-Menu-List">{imagePaths.map((imagePath, index) => (
            <div key={index}><img src={imagePath} width="100" height="100"/></div>))}
          </div>
        : null}
      </div>
    );
  }
}

const mapStateToProps = (state: ApplicationState): StoreProps => {
  const { imagePaths } = state.tileMenu;
  return { imagePaths };
};
const mapDispatchToProps = (dispatch: Dispatch<TileMenuActions>): ConnectedStates => {
  return {
    onAddImages: (imagePaths) => dispatch(addImages(imagePaths)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidemenu);