import * as React from 'react';
import { remote } from 'electron';
import './Sidemenu.css';
import { getFiles } from '../../../util';
import { connect, Dispatch } from 'react-redux';
import { ApplicationState } from '../../../Store';
import { AllProps, SidemenuState, StoreProps, ConnectedStates } from './Sidemenu.ts';
import { TileMenuActions } from '../../../Store/TileMenu/types';
import { addImages, selectImage } from '../../../Store/TileMenu/action';
import ImageTile from '../../Components/ImageTile/ImageTile';
import { MenuImage } from '../../../Models/Models';
// import { TileImage } from '../../Models/Models';

class Sidemenu extends React.Component<AllProps, SidemenuState> {

  public buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    let imagePaths = getFiles(remote.dialog.showOpenDialog({properties: ['openDirectory']})[0]);
    this.props.onAddImages(imagePaths);
  }

  public clickHandler = (menuImage: MenuImage) => {
    this.props.onSelectedImage(menuImage);
    this.forceUpdate();
  }

  public render() {
    const { menuImages } = this.props;
    return (
      <div className="Side-Menu">
        <button onClick={this.buttonHandler}>Get Files</button>
        {menuImages!.length >= 1 
        ? <div className="Side-Menu-List">{menuImages!.map((menuImage, index) => {
            return <ImageTile 
              key={index} 
              clicked={this.clickHandler} 
              menuImage={menuImage}
            />; 
            })}
          </div>
        : null}
      </div>
    );
  }
}

const mapStateToProps = (state: ApplicationState): StoreProps => {
  const { menuImages, selectedImage } = state.tileMenu;
  return { menuImages, selectedImage };
};
const mapDispatchToProps = (dispatch: Dispatch<TileMenuActions>): ConnectedStates => {
  return {
    onAddImages: (imagePaths) => dispatch(addImages(imagePaths)),
    onSelectedImage: (menuImage) => dispatch(selectImage(menuImage))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidemenu);